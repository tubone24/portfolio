import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ImageLoader from "react-load-image";
import styled, { css } from "styled-components";

const HeroContainer = styled(ImageLoader)<Props>`
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
      }
    `}
`;
const HeroImage = styled.div<Props>`
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  background: #171d2e;
  padding-top: calc(100% * ${(props) => props.aspectRatio});
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
      background-size: contain;
      image-rendering: -webkit-optimize-contrast;
      animation: 0.5s linear forwards reveal;
    `}
  ${(props) =>
    props.thumbnail &&
    css<Props>`
      background-image: url(${(props) => props.thumbnail});
      background-repeat: no-repeat;
      background-size: contain;
      image-rendering: -webkit-optimize-contrast;
    `}
  ${(props) =>
    props.fillPage &&
    css`
      background-size: cover;
      height: 100vh;
    `}
`;

type Props = {
  img?: string;
  fillPage?: boolean;
  aspectRatio?: number;
  src?: string;
  thumbnail?: string;
};

export const Hero = (props: Props) => (
  <HeroContainer overlay src={props.img} fillPage={props.fillPage}>
    <HeroImage aspectRatio={props.aspectRatio} fillPage={props.fillPage} />
    <img src={props.img} alt="hero image" decoding="async" />
    <HeroImage
      aspectRatio={props.aspectRatio}
      thumbnail={props.thumbnail}
      fillPage={props.fillPage}
    />
  </HeroContainer>
);

export default Hero;
