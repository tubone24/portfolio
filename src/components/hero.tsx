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
      padding-top: 0;
      width: 100vw;
      height: 100vh;
    `}
  ${(props) =>
    props.fillPage &&
    props.overlay &&
    css`
      &:after {
        background: #292929;
        opacity: 0.4;
        content: "";
        width: 100%;
        height: auto;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 1;
      }
    `}
`;

const HeroContainer = styled(ImageLoader)<Props>`
  overflow: hidden;
  ${(props) =>
    props.fillPage &&
    css`
      padding-top: 0;
      width: 100vw;
      height: 100vh;
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
      filter: blur(0px);
      transform: scale(1);
    }
  }
  ${(props) =>
    props.src &&
    css<Props>`
      background: url(${(props) => props.src});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      image-rendering: -webkit-optimize-contrast;
      animation: 0.5s linear forwards reveal;
    `}
  ${(props) =>
    props.thumbnail &&
    css<Props>`
      background-image: url(${(props) => props.thumbnail});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      image-rendering: -webkit-optimize-contrast;
    `}
`;

type Props = {
  img?: string;
  fillPage?: boolean;
  aspectRatio?: number;
  src?: string;
  thumbnail?: string;
};

export const Hero = (props: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    console.log("Hero component mounted, isLoading:", isLoading);
  }, []);

  React.useEffect(() => {
    console.log("Hero isLoading changed:", isLoading);
  }, [isLoading]);

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
