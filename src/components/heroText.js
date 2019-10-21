import React from 'react'
import styled, { css } from 'styled-components'
import Typist from 'react-typist'

import { media } from '../utils/style'

const StyledTypist = styled(Typist)`
  color: #fff;
  letter-spacing: 17px;
  max-width: 100%;
  font-size: 50px;
  line-height: 72px;
  font-weight: 100;
  font-family: 'Srisakdi';
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

class HeroText extends React.Component {
  render() {
    if (this.props.text) {
      return (
        <Typist>
          <StyledTypist {...this.props}>
            <strong>
              {this.props.text.split(' ').slice(0, 1)}
              <br />
            </strong>
            {this.props.text
              .split(' ')
              .slice(1)
              .join(' ')}
          </StyledTypist>
        </Typist>
      )
    }
    return (
      <StyledTypist cursor={{ show: false }} {...this.props}>
        <strong>I'm</strong> tubone
        <Typist.Backspace count={6} delay={300} />
        <span> a server-side engineer</span>
        <Typist.Backspace count={23} delay={300} />
        <span> a Photographer</span>
        <Typist.Backspace count={12} delay={300} />
        <span> DTM composer, Guitarist</span>
        <Typist.Delay ms={100} />
        <span>.</span>
        <Typist.Delay ms={200} />
        <span>.</span>
        <Typist.Delay ms={300} />
        <span>.</span>
        <Typist.Backspace count={36} delay={10} />
        <strong>I</strong> like <strong>everything</strong> with techs
      </StyledTypist>
    )
  }
}

export default HeroText
