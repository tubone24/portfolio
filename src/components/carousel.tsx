import React from "react";
import NukaCarousel from "nuka-carousel";

type Props = {
  images: Image[];
};

type Image = {
  src: string;
  title?: string;
};

export const Carousel = (props: Props): JSX.Element => {
  const images = props.images.map((image) => {
    return (
      <img
        key={image.src}
        src={image.src}
        alt={image.title || image.src}
        title={image.title || ""}
      />
    );
  });

  return (
    <NukaCarousel wrapAround dragging autoplay>
      {images}
    </NukaCarousel>
  );
};

export default Carousel;
