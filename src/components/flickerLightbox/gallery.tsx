import React, { useState } from "react";
import styled, { css } from "styled-components";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Lightbox from "react-images";

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
  const [currentImage, setCurrentImage] = useState(0);

  const openLightbox = (index: number, event: any) => {
    event.preventDefault();
    setCurrentImage(index);
    setLightboxIsOpen(true);
  };
  const closeLightbox = () => {
    setCurrentImage(0);
    setLightboxIsOpen(false);
  };

  const gotoPrevious = () => {
    setCurrentImage(currentImage - 1);
  };

  const gotoNext = () => {
    setCurrentImage(currentImage + 1);
  };

  const gotoImage = (index: number) => {
    setCurrentImage(index);
  };

  const handleClickImage = () => {
    if (currentImage === props.images.length - 1) return;
    gotoNext();
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

  return (
    props.images && (
      <div className="Gallery">
        {props.heading && <h2>{props.heading}</h2>}
        {props.subheading && <p>{props.subheading}</p>}
        {renderGallery()}
        <Lightbox
          currentImage={currentImage}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          images={props.images}
          isOpen={lightboxIsOpen}
          onClickImage={handleClickImage}
          onClickNext={gotoNext}
          onClickPrev={gotoPrevious}
          onClickThumbnail={gotoImage}
          onClose={closeLightbox}
        />
      </div>
    )
  );
};
