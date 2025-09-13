import React from "react";

const Img = (props) =>
  React.createElement("img", { alt: props.alt || "", ...props });

export const GatsbyImage = Img;
export const StaticImage = Img;

export const getImage = (d) => d;
export const getSrc = (d) =>
  (d?.images?.fallback?.src ? d.images.fallback.src : "");

export default {
  GatsbyImage,
  StaticImage,
  getImage,
  getSrc,
};
