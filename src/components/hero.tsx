import React, { useState } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ImageLoader from "react-load-image";
import styled, { css } from "styled-components";
import ShibaLoader from "./ShibaLoader";

const HeroWrapper = styled.div<Props>`
  position: relative;
  overflow: hidden;
  ${(props) =>
    props.fillPage &&
    css`
      width: 100vw;
      height: 100vh;
      padding-top: 0;
    `}
  ${(props) =>
    props.fillPage &&
    props.overlay &&
    css`
      &::after {
        position: absolute;
        z-index: 1;
        inset: 0;
        width: 100%;
        height: auto;
        background: #292929;
        content: "";
        opacity: 0.4;
      }
    `}
`;

const HeroContainer = styled(ImageLoader)<Props>`
  overflow: hidden;
  ${(props) =>
    props.fillPage &&
    css`
      width: 100vw;
      height: 100vh;
      padding-top: 0;
    `}
`;
const HeroImage = styled.div<Props>`
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  background: #171d2e;
  ${(props) =>
    props.fillPage
      ? css`
          height: 100vh;
        `
      : css`
          padding-top: calc(100% * ${props.aspectRatio || 0.67});
        `}
  filter: blur(30px);
  transform: scale(1.1);

  @keyframes reveal {
    from {
      filter: blur(30px);
      transform: scale(1.1);
    }

    to {
      filter: blur(0);
      transform: scale(1);
    }
  }
  ${(props) =>
    props.src &&
    css<Props>`
      animation: 0.5s linear forwards reveal;
      background: url(${(props) => props.src});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      image-rendering: -webkit-optimize-contrast;
    `}
  ${(props) =>
    props.thumbnail &&
    css<Props>`
      background-image: url(${(props) => props.thumbnail});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      image-rendering: -webkit-optimize-contrast;
    `}
`;

type Props = {
  img?: string;
  fillPage?: boolean;
  aspectRatio?: number;
  src?: string;
  thumbnail?: string;
  onLoadingChange?: (isLoading: boolean) => void;
};

export const Hero = (props: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    console.log("Hero component mounted, isLoading:", isLoading);
  }, []);

  React.useEffect(() => {
    console.log("Hero isLoading changed:", isLoading);
    if (props.onLoadingChange) {
      props.onLoadingChange(isLoading);
    }
  }, [isLoading, props.onLoadingChange]);

  React.useEffect(() => {
    // 画像のプリロード
    const img = new Image();
    img.src = props.img || "";
    img.onload = () => {
      console.log("Image loaded, setting isLoading to false");
      setIsLoading(false);
    };
    img.onerror = () => {
      console.log("Image failed to load, setting isLoading to false");
      setIsLoading(false);
    };
  }, [props.img]);

  return (
    <HeroWrapper overlay={props.fillPage} fillPage={props.fillPage}>
      <HeroContainer src={props.img} fillPage={props.fillPage}>
        <HeroImage aspectRatio={props.aspectRatio} fillPage={props.fillPage} />
        <img src={props.img} alt="hero image" decoding="async" />
        <HeroImage
          aspectRatio={props.aspectRatio}
          thumbnail={props.thumbnail}
          fillPage={props.fillPage}
        />
      </HeroContainer>
      <ShibaLoader show={isLoading} />
    </HeroWrapper>
  );
};

export default Hero;
