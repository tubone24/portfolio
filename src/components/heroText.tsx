import React from 'react'
import styled from 'styled-components'
import Typist from 'react-typist'

import { media } from '../utils/style'

const StyledTypist = styled(Typist)`
  color: #fff;
  letter-spacing: 17px;
  max-width: 100%;
  font-size: 64px;
  line-height: 72px;
  font-weight: 100;
  font-family: 'Love Ya Like A Sister';
  position: absolute;
  top: 50%;
  left: 50%;
  ${media.md`
  left: 25%;
  top: 40%;
`}
  ${media.xs`
  left: 3%;
  top: 15%;
  letter-spacing: 12px;
`}
`

type Props = {
  text?: string
}

export const HeroText = (props: Props): JSX.Element  => {
  if (props.text) {
    return (
      <Typist>
        <StyledTypist>
          <strong>
            {props.text.split(' ').slice(0, 1)}
            <br />
          </strong>
          {props.text
            .split(' ')
            .slice(1)
            .join(' ')}
        </StyledTypist>
      </Typist>
    )
  }
  return (
    <StyledTypist cursor={{ show: false }} {...props}>
      <Typist.Delay ms={600} />
      <strong>I'm </strong>
      <Typist.Delay ms={600} />
      tubone
      <Typist.Backspace count={6} delay={600} />
      <span> a server-side developer</span>
      <Typist.Backspace count={23} delay={600} />
      <span> a Photographer</span>
      <Typist.Backspace count={12} delay={300} />
      <span> DTM composer, Guitarist</span>
      <Typist.Delay ms={100} />
      <span>.</span>
      <Typist.Delay ms={200} />
      <span>.</span>
      <Typist.Delay ms={300} />
      <span>.</span>
      <Typist.Backspace count={36} delay={300} />
      <strong>I</strong>'m <strong>tubone</strong>
      <Typist.Delay ms={300} />
      <span>!</span>
      <Typist.Delay ms={600} />
      <span>!</span>
      <Typist.Delay ms={1200} />
      <span>!</span>
    </StyledTypist>
  )
}

export default HeroText
