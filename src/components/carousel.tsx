import React from 'react'
import NukaCarousel from 'nuka-carousel'

type Props = {
  images: string[]
}

export const Carousel = (props: Props): JSX.Element => {
  const images = props.images.map(function(image) {
    return <img key={image} src={image} alt={image} />
  })
  return (
    <NukaCarousel wrapAround dragging autoplay>
      {images}
    </NukaCarousel>
  )
}

export default Carousel
