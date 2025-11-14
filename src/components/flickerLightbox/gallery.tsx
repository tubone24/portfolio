import React, { useState } from "react";
import styled, { css } from "styled-components";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const gutter = {
  small: "2px",
  large: "4px",
};

const Base = styled.div`
  overflow: hidden;
  margin-right: ${gutter.small};
  color: palevioletred;

  @media (width <= 500px) {
    margin-right: -${gutter.large};
  }
`;

const Thumbnail = styled.a`
  box-sizing: border-box;
  display: block;
  float: left;
  line-height: 0;
  padding-right: ${gutter.small};
  padding-bottom: ${gutter.small};
  overflow: hidden;

  ${(props: Props) =>
    props.landscape &&
    css`
      width: 30%;
    `}
  ${(props: Props) =>
    props.square &&
    css`
      width: 40%;
      padding-bottom: 0;

      @media (width <= 500px) {
        padding-bottom: 0;
      }
    `}
	@media (width <= 500px) {
    padding-right: ${gutter.large};
    padding-bottom: ${gutter.large};
  }
`;

const Source = styled.img`
  display: block;
  width: auto;
  max-width: 100%;
  height: auto;
  border: 0;
`;

interface GalleryImage {
  src: string;
  thumbnail: string;
  caption?: string;
  orientation?: {
    square?: boolean;
    landscape?: boolean;
  };
}

export type Props = {
  heading?: string;
  images: GalleryImage[];
  showThumbnails?: boolean;
  subheading?: string;
  square?: boolean;
  landscape?: boolean;
};

export const Gallery = (props: Props) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setCurrentIndex(index);
    setLightboxIsOpen(true);
  };
  const closeLightbox = () => {
    setCurrentIndex(0);
    setLightboxIsOpen(false);
  };

  const renderGallery = () => {
    if (!props.images) return;

    const gallery = props.images.map((obj, i) => {
      return (
        <Thumbnail
          href={obj.src}
          key={i}
          onClick={(e) => openLightbox(i, e)}
          {...obj.orientation}
        >
          <Source src={obj.thumbnail} />
        </Thumbnail>
      );
    });

    return <Base>{gallery}</Base>;
  };

  // yet-another-react-lightbox用のスライドデータに変換
  const slides = props.images
    ? props.images.map((img) => ({
        src: img.src,
        title: img.caption,
      }))
    : [];

  return (
    props.images && (
      <div className="Gallery">
        {props.heading && <h2>{props.heading}</h2>}
        {props.subheading && <p>{props.subheading}</p>}
        {renderGallery()}
        <Lightbox
          open={lightboxIsOpen}
          close={closeLightbox}
          index={currentIndex}
          slides={slides}
        />
      </div>
    )
  );
};
