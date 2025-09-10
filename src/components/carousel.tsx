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
      <div
        key={image.src}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "600px",
          overflow: "hidden",
          backgroundColor: "#f5f5f5",
        }}
      >
        <img
          src={image.src}
          alt={image.title || image.src}
          title={image.title || ""}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            width: "auto",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </div>
    );
  });

  return (
    <NukaCarousel wrapAround dragging autoplay transitionMode="scroll3d">
      {images}
    </NukaCarousel>
  );
};

export default Carousel;
