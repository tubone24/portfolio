import React from 'react'
// @ts-ignore
import ImageLoader from 'react-load-image';
import styled, { css } from 'styled-components'

const HeroContainer = styled(ImageLoader)<Props>`
  overflow: hidden;
  ${props => props.fillPage && css`
    padding-top: 0;
    width: 100vw;
    height: 100vh;
  `}
  ${props => props.fillPage && props.overlay && css`
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
`
const HeroImage = styled.div<Props>`
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  background: #4966B1;
  padding-top: calc(100% * ${props => props.aspectRatio});
  filter: blur(30px);
  transform: scale(1.1);
  @keyframes reveal { from { filter:blur(30px); transform: scale(1.1); } to { filter:blur(0px); transform: scale(1.0); }  }
  ${props => props.src && css`
    background: url(${props => props.src}); /* TS2339 */
    background-repeat: no-repeat;
    background-size: contain;
    image-rendering: -webkit-optimize-contrast;
    animation: 0.5s linear forwards reveal;
  `}
  ${props => props.thumbnail && css`
    background-image: url(${props => props.thumbnail}); /* TS2339 */
    background-repeat: no-repeat;
    background-size: contain;
    image-rendering: -webkit-optimize-contrast;
  `}
  ${props => props.fillPage && css`
    background-size: cover;
    height: 100vh;
  `}
`

type Props = {
  img?: string
  fillPage?: boolean
  aspectRatio?: number
  src?: string
  thumbnail?: string
}

export const Hero = (props: Props) => (
  <HeroContainer overlay src={props.img} fillPage={props.fillPage} >
    <HeroImage aspectRatio={props.aspectRatio} fillPage={props.fillPage} />
    <img src={props.img} />
    <HeroImage aspectRatio={props.aspectRatio} thumbnail={props.thumbnail} fillPage={props.fillPage} />
  </HeroContainer>
)

export default Hero
