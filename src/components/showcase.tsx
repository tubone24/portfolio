import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
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
      gatsbyImageData: IGatsbyImageData
    }
  }
}

type Props = {
  images: readonly Image[]
}

const Showcase = (props: Props): JSX.Element => {
  const images = props.images.map(image => {
    const node = image.node
    const gatsbyImageData = node?.childImageSharp?.gatsbyImageData
    return (
      <Box key={Number(node?.id)} px={2} width={[1 / 2, 1 / 3]}>
        {gatsbyImageData && <GatsbyImage image={gatsbyImageData} alt={"aa"}/>}
      </Box>
    )
  })
  return (
    <Base>
      <Flex flexWrap="wrap">{images}</Flex>
    </Base>
  )
}

export default Showcase
