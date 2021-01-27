import React from 'react'
import styled from 'styled-components'
import { Flex } from 'grid-styled'
import { media } from '../utils/style'

const Base = styled.div`
  width: 40%;
  margin: 0 auto !important;
  padding: 0;
  overflow: hidden;
  padding-top: 140px;

  ${media.xs`
    width: 95%;
    margin-left: 0;
  `}
`

const GitHubWeed = (): JSX.Element  => (
  <Base>
    <span>My GitHub Output</span>
    <Flex flexWrap="wrap">
      <a href="https://github.com/tubone24">
        <img
          src="https://grass-graph.moshimo.works/images/tubone24.png?background=none"
          alt="githubWeed"
        />
      </a>
    </Flex>
  </Base>
)

export default GitHubWeed
