import React, { useState, useEffect } from 'react';
import buildUrl from 'build-url';
import Hero from './hero';
import fetch from 'cross-fetch';

type Props = {
  api_key: string;
  user_id: string;
  album_id: string;
  limit?: number;
  searchTerm?: string;
  fillPage?: boolean;
  className?: string;
};

interface Image {
  src: string;
  thumbnail: string;
  aspectRatio: number;
}

interface Photo {
  url_o?: string;
  url_m?: string;
  url_t: string;
  height_t: number;
  width_t: number;
}

const FlickrHero = (props: Props) => {
  const [images, setImages] = useState<Image[]>([]);

  const generateApiUrl = (props: Props) => {
    const extras = ["url_o", "url_m", "url_t"];
    return buildUrl("https://api.flickr.com", {
      path: "services/rest/",
      queryParams: {
        method: props.album_id
          ? "flickr.photosets.getPhotos"
          : props.user_id || props.searchTerm
            ? "flickr.photos.search"
            : "flickr.photos.getRecent",
        format: "json",
        api_key: props.api_key || "",
        user_id: props.user_id || "",
        photoset_id: props.album_id || "",
        text: props.searchTerm || "",
        per_page: String(
          props.limit || (props.album_id ? Number.MAX_SAFE_INTEGER : 1)
        ),
        nojsoncallback: "?",
        extras: extras.join(","),
      },
    });
  };

  const queryFlickrApi = (props: Props) => {
    fetch(generateApiUrl(props))
      .then((response) => response.json())
      .then((data: { photoset: { photo: Photo[] }; photos: { photo: Photo[] } }) => {
        let photos = [];
        if (data.photoset) {
          photos = data.photoset.photo;
        } else if (data.photos) {
          photos = data.photos.photo;
        } else {
          throw data;
        }
        setImages(photos.map((p) => ({
          src: p.url_o || p.url_m || "https://s.yimg.com/pw/images/en-us/photo_unavailable.png",
          thumbnail: p.url_t,
          aspectRatio: Math.min(p.height_t, p.width_t) / Math.max(p.height_t, p.width_t),
        })));
      })
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    queryFlickrApi(props);
    // If props could change and you want to re-fetch the data when they do, include them in the dependency array
    // For this example, it's left as an empty array to mimic componentWillMount behavior
  }, [props.api_key, props.user_id, props.album_id, props.limit, props.searchTerm]); // Add any props that could change and trigger a re-fetch

  const image = images[Math.floor(Math.random() * images.length)];
  return (
    <Hero
      img={image ? image.src : ""}
      thumbnail={image ? image.thumbnail : ""}
      aspectRatio={image ? image.aspectRatio : 0}
      {...props}
    />
  );
};

export default FlickrHero;
