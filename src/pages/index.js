import React from 'react'
import { graphql } from 'gatsby'
import { Flex, Box } from 'grid-styled'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import FlickrHero from 'react-flickr-hero'

import { media } from '../utils/style'

import Layout from '../components/layout'
import NavBar from '../components/navbar'
import HeroText from '../components/heroText'
import SocialIcons from '../components/socialIcons'
import Portfolio from '../components/portfolio'
import Showcase from '../components/showcase'
import Button from "../components/button";
import scrollToElement from "scroll-to-element";
import Carousel from "../components/carousel";
import FlickrLightbox from "react-flickr-lightbox";

const Content = styled.div`
  & > a {
    visibility: hidden;
    display: block;
    height: 0;
  }
  & > h1 {
    text-align: center;
  }
`

const CenteredButtonBox = styled(Box)`
  margin: 2em auto;
`

const Title = styled.h1`
  font-family: 'Raleway';
  text-transform: uppercase;
  letter-spacing: 6px;
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  border: none;
  color: #292929;

  ${props =>
    props.small &&
    css`
      font-size: 12px;
      letter-spacing: 2px;
      font-weight: 700;
      line-height: 24px;
    `}
`

const Section = styled.div`
  text-align: center;
  padding-top: 45px;
  padding-bottom: 40px;

  a {
    font-family: 'Lato';
  }

  p {
    margin-bottom: 64px;
    font-size: large;
    color: #666;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Raleway';
    text-transform: uppercase;
    color: #292929;
  }

  h4 {
    letter-spacing: 3px;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #292929;
  }

  span {
    color: #666;
    opacity: 0.5;
    display: block;
  }

  & > div:last-child {
    border-bottom: none !important;
  }

  ${props =>
    props.center &&
    css`
      text-align: left;
      & > * {
        margin-left: 30vw;
      }
      h4 {
        margin-left: 20vw;
      }

      ${media.xs`
        & > div {
          margin-left: 3vw !important;
        }
    `}
    `}

  ${props =>
    props.dark &&
    css`
      background: #e2f4e3;
      * {
        color: #eee;
      }
      span {
        text-align: left;
        font-size: 16px;
        line-height: 28px;
        font-weight: 400;
        opacity: 0.5;
      }
      span,
      p {
        color: #fefefe !important;
      }
      h6 {
        color: #fff;
        font-weight: 700;
      }
      h4 {
        color: #fff;
      }
      div {
        border-bottom: 1px solid #333 !important;
      }
    `}
`

const Item = styled.div`
  width: 40%;
  margin: 0 auto;
  border: none;
  border-bottom: 1px solid #eee;
  h6 {
    letter-spacing: 2px;
    font-weight: 700;
    padding-top: 6px;
  }
  span,
  p {
    font-size: 13px;
    line-height: 24px;
    color: #666;
  }
  span {
    opacity: 0.75;
    float: right;
    text-transform: uppercase;
  }
  p {
    margin-bottom: 24px;
    opacity: 0.5;
  }
  ${media.xs`
    width: 90%;

  `}
`

export default props => {
  const content = (
    <Content>
      <FlickrHero
        api_key="89f4752b9b3a8dffcbf94ca144719883"
        user_id="184992580@N06"
        album_id="72157711319102412"
        fillPage
      />
      <HeroText />
      <SocialIcons
        style={{
          position: 'absolute',
          margin: '0 auto',
          left: 0,
          right: 0,
          bottom: 16,
        }}
        icons={[
          {
            name: 'twitter',
            href: 'https://twitter.com/meitante1conan',
          },
          {
            name: 'github-alt',
            href: 'https://github.com/tubone24',
          },
          {
            name: 'soundcloud',
            href: 'https://soundcloud.com/user-453736300',
          },
          {
            name: 'slideshare',
            href: 'https://www.slideshare.net/tubone24',
          },
          {
            name: '500px',
            href: 'https://500px.com/tubone24',
          },
        ]}
      />
      <a id="about-me">About Me</a>
      <Section>
        <Title>About Me</Title>
        <Flex alignItems="center" flexDirection="column">
          <Box px={2} width={[1, 1 / 2]}>
            <p>
              I'm a Software Engineer with over 4+ years and latest trying to tech lead with engineering teams.
              Expert at AWS by using Server-less architecture.<br />
              Also master of Server-side API and Batch with Python.<br />
              Additionally, experienced data science with Python and AWS.<br />
              Have a AWS Certified Solution Architect – Professional. <br />
              Further more, I'm amateur photographer, Uploading for <a href={"https://500px.com/tubone24"}>500px.com</a> <br />
              And also, I'm amateur DTM composer and Guitarist (collaborating with <a href={"https://chocoholic.stores.jp/"}>chocoholic</a>).<br />>
              Nice to meet you and I look forward to collaborating with you.
            </p>
          </Box>
          <Box px={2} width={180}>
            <Img
              sizes={
                props.data.allFile
                  ? props.data.allFile.edges[0].node.childImageSharp.sizes
                  : {}
              }
            />
          </Box>
        </Flex>
      </Section>
      <Title small>Portfolio</Title>
      <a id="portfolio">Portfolio</a>
      <Portfolio items={props.data.allMarkdownRemark.edges} />
      <Title small>Photos</Title>
      <a id="photos">Photos</a>
      <Section>
        <Flex alignItems="center" flexDirection="column">
        <Box px={2} width={[1, 1 / 2]}>
      <FlickrLightbox
        api_key="89f4752b9b3a8dffcbf94ca144719883"
        user_id="184992580@N06"
        limit={32}
      />
        </Box>
        </Flex>
      </Section>
      <a id="tech">Tech</a>
      <Section>
        <Title>Tech</Title>
        <span>Technologies I enjoy working with.</span>
        <Showcase
          images={
            props.data.allImageSharp ? props.data.allImageSharp.edges : []
          }
        />
      </Section>
      <a id="blog">Blog</a>
      <Section>
      <Title>Blog</Title>
      <Flex alignItems="center" flexDirection="column">
        <Box px={2} width={[1, 1 / 2]}>
          <p>tubone BOYAKI is my blog.<br/>
            Check my Tech KATSUDOU! (Activity)</p>
        </Box>
            <a href="https://blog.tubone-project24.xyz">
              <Box px={2} width={180}>
                <Button
                >
                  Read Me!
                </Button>
              </Box>
            </a>
      </Flex>
      </Section>
      <a id="resume">Resume</a>
      <Section>
        <Title>Resume</Title>
        <Flex alignItems="center" flexDirection="column">
          <Box px={2} width={[1, 1 / 2]}>
            <p>Check my Resume!</p>
          </Box>
          <a href="https://tubone24.github.io/resume">
            <Box px={2} width={180}>
              <Button
              >
                Hire Me!
              </Button>
            </Box>
          </a>
        </Flex>
      </Section>
      <a id="contact">Contact</a>
      <Section>
        <Title>Contact</Title>
        <Flex alignItems="center" flexDirection="column">
          <Box px={2} width={[1, 1 / 2]}>
            <p>If you interested, Contact me!</p>
          </Box>
          <a href="https://blog.tubone-project24.xyz/contacts/">
            <Box px={2} width={180}>
              <Button
              >
                Contact Me!
              </Button>
            </Box>
          </a>
        </Flex>
      </Section>
    </Content>
  )
  return (
    <Layout location={props.location}>
      <NavBar main children={content.props.children} />
      {content}
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          timeToRead
          excerpt(pruneLength: 120)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
            image {
              childImageSharp {
                sizes(
                  maxWidth: 500
                  duotone: {
                    highlight: "#333333"
                    shadow: "#111111"
                    opacity: 65
                  }
                  ) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
    allImageSharp: allFile(filter: { relativePath: { regex: "/logos/" } }) {
      edges {
        node {
          id
          childImageSharp {
            sizes(maxWidth: 300, grayscale: true) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }
    allFile(filter: { name: { regex: "/tubone24-icon/" } }) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 200, grayscale: true) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
    }
  }
`
