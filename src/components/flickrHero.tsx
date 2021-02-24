import React, {Component} from 'react'
import buildUrl from 'build-url'
import Hero from './hero'
import fetch from 'isomorphic-fetch'

type Props = {
  api_key: string
  user_id: string
  album_id: string
  limit?: number
  searchTerm?: string
  fillPage?: boolean
  className?: string
}

interface State {
  images: Image[]
}

interface Image {
  src: string
  thumbnail: string
  aspectRatio: number
}

interface Photo {
  url_o?: string
  url_m?: string
  url_t: string
  height_t: number
  width_t: number
}

class FlickrHero extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { images: []};
  }

  componentWillMount() {
    this.queryFlickrApi(this.props)
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    this.queryFlickrApi(prevProps)
  }

  generateApiUrl = (props: Props) => {
    const extras = ["url_o", "url_m", "url_t"];
    return buildUrl('https://api.flickr.com', {
      path: 'services/rest/',
      queryParams: {
        method:  props.album_id ? 'flickr.photosets.getPhotos' : (props.user_id || props.searchTerm) ? 'flickr.photos.search' : 'flickr.photos.getRecent' ,
        format: 'json',
        api_key: props.api_key || '',
        user_id: props.user_id || '',
        photoset_id: props.album_id || '',
        text: props.searchTerm || '',
        per_page: String(props.limit || (props.album_id ? Number.MAX_SAFE_INTEGER : 1)),
        nojsoncallback: '?',
        extras: extras.join(',')
      }
    })
  }

  queryFlickrApi = (props: Props) => {
    fetch(this.generateApiUrl(props))
      .then(response => response.json())
      .then((data: { photoset: { photo: Photo[] }; photos: { photo: Photo[] } }) => {
        let photos = [];
        if (data.photoset) {
          photos = data.photoset.photo
        }
        else if (data.photos) {
          photos = data.photos.photo
        } else {
          throw(data);
        }
        this.setState({
          images:photos.map((p) =>
          {
            return {
              src: p.url_o || p.url_m || 'https://s.yimg.com/pw/images/en-us/photo_unavailable.png',
              thumbnail: p.url_t,
              aspectRatio: Math.min(p.height_t, p.width_t) / Math.max(p.height_t, p.width_t)
            }
          })
        })
      })
      .catch(e => console.error(e))
  }

  render() {
    const image = this.state.images[Math.floor(Math.random()*this.state.images.length)];
    return (
      <Hero
        img={image ? image.src : ''}
        thumbnail={image ? image.thumbnail : ''}
        aspectRatio={image ? image.aspectRatio : 0}
        {...this.props}
      />
    )
  }
}

export default FlickrHero
