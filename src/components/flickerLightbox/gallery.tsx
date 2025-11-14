import React, { useState } from "react";
import styled, { css } from "styled-components";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const gutter = {
  small: "2px",
  large: "4px",
};

const Base = styled.div`
  margin-right: ${gutter.small};
  overflow: hidden;
  color: palevioletred;
  @media (max-width: 500px) {
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
      padding-bottom: 0;
      width: 40%;
      @media (max-width: 500px) {
        padding-bottom: 0;
      }
    `}
	@media (max-width: 500px) {
    padding-right: ${gutter.large};
    padding-bottom: ${gutter.large};
  }
`;

const Source = styled.img`
  border: 0;
  display: block;
  height: auto;
  max-width: 100%;
  width: auto;
`;

export type Props = {
  heading?: string;
  images: any[];
  showThumbnails?: boolean;
  subheading?: string;
  square?: boolean;
  landscape?: boolean;
};

export const Gallery = (props: Props) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number, event: any) => {
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
