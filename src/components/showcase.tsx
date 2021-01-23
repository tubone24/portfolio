import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import Img from 'gatsby-image'
import { media } from '../utils/style'

const Base = styled.div`
  width: 40%;
  margin: 0 auto !important;
  padding: 0;
  overflow: hidden;
  padding-top: 40px;

  ${media.xs`
    width: 95%;
    margin-left: 0;
  `}
`

interface Image {
  node?: {
    id?: string
    childImageSharp?: {
      fluid?: Pick<GatsbyTypes.GatsbyImageSharpFluidFragment, 'src'|'srcSet'|'aspectRatio'|'sizes'>
    }
  }
}

type Props = {
  images: readonly Image[]
}

const Showcase = (props: Props) => {
    const images = props.images.map(image => {
      const node = image.node;
      const fluid = node?.childImageSharp?.fluid;
      return(
      <Box key={Number(node?.id)} px={2} width={[1 / 2, 1 / 3]}>
        {fluid && <Img fluid={fluid} />}
      </Box>
      )});
    return (
      <Base>
        <Flex flexWrap="wrap">{images}</Flex>
      </Base>
    )
}

export default Showcase
