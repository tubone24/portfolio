import { Box, Flex } from 'grid-styled'
import Img from 'gatsby-image'
import React from 'react'

type Node = {
  node?: {
    childImageSharp?: {
      fluid?: Pick<GatsbyTypes.GatsbyImageSharpFluidFragment, 'src'|'srcSet'|'aspectRatio'|'sizes'>
    }
  }
}

type Props = {
  allFile?: {
    edges?: readonly Node[]
  }
}
const AboutMe = ({ allFile }: Props) => (
  <Flex alignItems="center" flexDirection="column">
    <Box px={2} width={[1, 1 / 2]}>
      <p>
        I'm a Software and Infrastructure developer with over 4+ years, and I've
        been leading some engineering teams in recent years. Expert at AWS by
        using Server-less architecture.
        <br />
        Also master of Server-side API and Batch with Python.
        <br />
        Additionally, experienced data science with Python and AWS.
        <br />
        Have a AWS Certified Solution Architect – Professional. <br />
        Further more, I'm amateur photographer, Uploading for{' '}
        <a href={'https://500px.com/tubone24'}>500px.com</a> <br />
        And also, I'm amateur DTM composer and Guitarist (collaborating with{' '}
        <a href={'https://chocoholic.stores.jp/'}>chocoholic</a>).
        <br />
        Nice to meet you and I look forward to collaborating with you.
      </p>
      <p>
        カメラと音楽を嗜む低能Webデベロッパーです。
        <br />
        AWSが比較的得意なインフラエンジニアですが、サーバサイドもフロントサイドも好きです。
        <br />
        実は本業より休日にコードを書いているタイプです。
        <br />
        需要のないWebアプリなどを使って自己満足しているかわいそうな人なので優しくしてください。
      </p>
    </Box>
    <Box px={2} width={180}>
      {allFile?.edges && (allFile.edges.length !== 0) && allFile?.edges[0].node?.childImageSharp?.fluid && <Img fluid={allFile.edges[0].node.childImageSharp.fluid} />}
    </Box>
  </Flex>
)

export default AboutMe
