import React from 'react'
import styled, { css } from 'styled-components'

const Base = styled.a<Props>`
  font-size: 30pt;
  font-family: 'Arizonia', cursive;
  color: #fff;
  margin: 20px 0;
  width: fit-content;
  white-space: nowrap;
  transition-property: transform;
  transition-duration: 0.8s;

  &:hover {
    cursor: pointer;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-image: url(https://media.giphy.com/media/l41YcGT5ShJa0nCM0/giphy.gif);
    text-decoration: none;
    -webkit-transform:rotate(354deg);
  }

  ${props =>
    props.dark &&
    css`
      color: #444;
    `}

  ${props =>
    props.block &&
    css`
      display: block;
    `}

  ${props =>
    props.small &&
    css`
      font-size: 1em;
    `}

  ${props =>
    props.big &&
    css`
      font-size: 2em;
    `}
`

type Props = {
  dark?: boolean,
  small?: boolean,
  big?: boolean,
  block?: boolean
}

const Name = (props: Props) => (
      <Base {...props} href="/">
        tubone24
      </Base>
    )

export default Name
