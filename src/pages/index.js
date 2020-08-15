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
import DarkButton from "../components/darkButton";
import scrollToElement from "scroll-to-element";
import Carousel from "../components/carousel";
import FlickrLightbox from "react-flickr-lightbox";
import Iframe from 'react-iframe'

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
      font-size: 24px;
      letter-spacing: 2px;
      font-weight: 400;
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
      background: #020d05;
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
              I'm a Software and Infrastructure developer with over 4+ years and the latest trying to tech lead with engineering teams.
              Expert at AWS by using Server-less architecture.<br />
              Also master of Server-side API and Batch with Python.<br />
              Additionally, experienced data science with Python and AWS.<br />
              Have a AWS Certified Solution Architect – Professional. <br />
              Further more, I'm amateur photographer, Uploading for <a href={"https://500px.com/tubone24"}>500px.com</a> <br />
              And also, I'm amateur DTM composer and Guitarist (collaborating with <a href={"https://chocoholic.stores.jp/"}>chocoholic</a>).<br />
              Nice to meet you and I look forward to collaborating with you.
            </p>
            <p>
              カメラと音楽を嗜む低能Webデベロッパーです。<br />
              AWSが比較的得意なインフラエンジニアですが、サーバサイドもフロントサイドも好きです。<br />
              実は本業より休日にコードを書いているタイプです。<br />
              需要のないWebアプリなどを使って自己満足しているかわいそうな人なので優しくしてください。
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
      <a id="photos">Photos</a>
      <Section>
        <Title small>Photos</Title>
        <Flex alignItems="center" flexDirection="column">
        <Box px={2} width={[1, 1 / 2]}>
          <span>Look at my Photos!</span>
      {/*<FlickrLightbox*/}
      {/*  api_key="89f4752b9b3a8dffcbf94ca144719883"*/}
      {/*  user_id="184992580@N06"*/}
      {/*  limit={44}*/}
      {/*/>*/}
      <Carousel images={[
        "https://live.staticflickr.com/65535/49918288566_7e75ed0501_c_d.jpg",
        "https://live.staticflickr.com/65535/49917776898_e51931ff19_c_d.jpg",
        "https://live.staticflickr.com/65535/49918586692_b7282f487c_c_d.jpg",
        "https://live.staticflickr.com/65535/49917775693_f6897f823f_c_d.jpg",
        "https://live.staticflickr.com/65535/49917769148_3cf209038e_c_d.jpg",
        "https://live.staticflickr.com/65535/49918577832_e17fa95e08_c_d.jpg",
        "https://live.staticflickr.com/65535/49917767373_d7bdbc318a_c_d.jpg",
        "https://live.staticflickr.com/65535/49918577327_19c56fac21_c_d.jpg",
        "https://live.staticflickr.com/65535/49918577237_3b78cf0939_c_d.jpg",
        "https://live.staticflickr.com/65535/49917766618_37a5076655_c_d.jpg",
        "https://live.staticflickr.com/65535/49918274036_ed6aa555c1_c_d.jpg",
        "https://live.staticflickr.com/65535/49917756298_9f073bc8ae_c_d.jpg",
        "https://live.staticflickr.com/65535/49918564982_352a6f5723_c_d.jpg",
        "https://live.staticflickr.com/65535/49918266016_56a023059d_c_d.jpg",
        "https://live.staticflickr.com/65535/48941128851_fd524759c7_c_d.jpg",
        "https://live.staticflickr.com/65535/48939600708_781532fe73_c_d.jpg",
        "https://live.staticflickr.com/65535/48940152156_be2b9f8771_c_d.jpg",
        "https://live.staticflickr.com/65535/48940132336_4b7b5e2169_c_d.jpg",
        "https://live.staticflickr.com/65535/48940110426_8ca9e15b8e_c_d.jpg",
        "https://live.staticflickr.com/65535/48940110541_d81bb141d7_c_d.jpg",
        "https://live.staticflickr.com/65535/48939556578_3ec9d366de_c_d.jpg",
        "https://live.staticflickr.com/65535/48940296822_1e06d9c023_c_d.jpg",
        "https://live.staticflickr.com/65535/48940110721_5228b19e0a_c_d.jpg",
        "https://live.staticflickr.com/65535/48940296947_6250329050_c_d.jpg",
        "https://live.staticflickr.com/65535/48940296987_086083e244_c_d.jpg",
        "https://live.staticflickr.com/65535/48940110931_8be5b66191_c_d.jpg",
        "https://live.staticflickr.com/65535/48940111021_a6b0432920_c_d.jpg",
        "https://live.staticflickr.com/65535/48939557013_4aa17409b1_c_d.jpg",
        "https://live.staticflickr.com/65535/48940297232_5219f1b6a5_c_d.jpg",
        "https://live.staticflickr.com/65535/48940111311_4bdb05da75_c_d.jpg",
        "https://live.staticflickr.com/65535/48940111371_968e14b0ce_c_d.jpg",
        "https://live.staticflickr.com/65535/48940297527_3ce64b70eb_c_d.jpg",
        "https://live.staticflickr.com/65535/48940111611_671dbc855e_c_d.jpg",
        "https://live.staticflickr.com/65535/48940297682_98c985190a_c_d.jpg",
        "https://live.staticflickr.com/65535/48940297762_c24173aaf1_c_d.jpg",
        "https://live.staticflickr.com/65535/48940297837_8c840a5ca7_c_d.jpg",
        "https://live.staticflickr.com/65535/48940111816_6fba0c6726_c_d.jpg",
        "https://live.staticflickr.com/65535/48940297942_3c80f9b8c4_c_d.jpg",
        "https://live.staticflickr.com/65535/48939557893_ff02ecb979_c_d.jpg",
        "https://live.staticflickr.com/65535/48940298112_598694f627_c_d.jpg",
        "https://live.staticflickr.com/65535/48940112141_da56fae5fb_c_d.jpg",
        "https://live.staticflickr.com/65535/48940298232_3d0ddfd990_c_d.jpg",
        "https://live.staticflickr.com/65535/48940112201_de5163bf23_c_d.jpg",
        "https://live.staticflickr.com/65535/48940298367_9bb6238194_c_d.jpg",
        "https://live.staticflickr.com/65535/48939558418_fb3cef7032_c_d.jpg",
        "https://live.staticflickr.com/65535/48940298717_ed78d97eeb_c_d.jpg",
        "https://live.staticflickr.com/65535/48940111611_671dbc855e_c_d.jpg",
        "https://live.staticflickr.com/65535/48940298672_bd40853cdf_c_d.jpg",
        "https://live.staticflickr.com/65535/48940297682_98c985190a_c_d.jpg",
        "https://live.staticflickr.com/65535/48940297762_c24173aaf1_c_d.jpg",
        "https://live.staticflickr.com/65535/48940297837_8c840a5ca7_c_d.jpg",
        "https://live.staticflickr.com/65535/49918288566_7e75ed0501_c_d.jpg",
        "https://live.staticflickr.com/65535/49917776898_e51931ff19_c_d.jpg",
        "https://live.staticflickr.com/65535/49918586692_b7282f487c_c_d.jpg",
        "https://live.staticflickr.com/65535/49917775693_f6897f823f_c_d.jpg",
        "https://live.staticflickr.com/65535/49917769148_3cf209038e_c_d.jpg",
        "https://live.staticflickr.com/65535/49918577832_e17fa95e08_c_d.jpg",
        "https://live.staticflickr.com/65535/49917767373_d7bdbc318a_c_d.jpg",
        "https://live.staticflickr.com/65535/49918577327_19c56fac21_c_d.jpg",
        "https://live.staticflickr.com/65535/49918577237_3b78cf0939_c_d.jpg",
        "https://live.staticflickr.com/65535/49917766618_37a5076655_c_d.jpg",
        "https://live.staticflickr.com/65535/49918274036_ed6aa555c1_c_d.jpg",
        "https://live.staticflickr.com/65535/49917756298_9f073bc8ae_c_d.jpg",
        "https://live.staticflickr.com/65535/49918564982_352a6f5723_c_d.jpg",
        "https://live.staticflickr.com/65535/49918266016_56a023059d_c_d.jpg",
        "https://live.staticflickr.com/65535/49932645738_58d4798932_c_d.jpg",
        "https://live.staticflickr.com/65535/49933160171_62dae3ec6a_c_d.jpg",
        "https://live.staticflickr.com/65535/49933494337_e44dc8c40f_c_d.jpg",
        "https://live.staticflickr.com/65535/49933514862_41fa7e8e82_c_d.jpg",
        "https://live.staticflickr.com/65535/49933515947_22aea92772_c_d.jpg",
        "https://live.staticflickr.com/65535/49933774577_6446e83fd0_c_d.jpg",
        "https://live.staticflickr.com/65535/49933780757_e0daecb01e_c_d.jpg",
        "https://live.staticflickr.com/65535/49932960458_4c91c90cff_c_d.jpg",
        "https://live.staticflickr.com/65535/49932961893_18043cc07a_c_d.jpg",
        "https://live.staticflickr.com/65535/49932973198_32aed3a768_c_d.jpg",
        "https://live.staticflickr.com/65535/49933490841_cfef832ffa_c_d.jpg",
        "https://live.staticflickr.com/65535/49933800702_ba8b56c917_c_d.jpg",
        "https://live.staticflickr.com/65535/49932981438_f0eaf7e95d_c_d.jpg",
        "https://live.staticflickr.com/65535/49933804772_f3e65246ba_c_d.jpg",
        "https://live.staticflickr.com/65535/49933500466_bdc4c9a3e2_c_d.jpg",
        "https://live.staticflickr.com/65535/49933502081_2b3aa8cd6c_c_d.jpg",
        "https://live.staticflickr.com/65535/49933503676_00a6697baf_c_d.jpg",
        "https://live.staticflickr.com/65535/49932990623_224de0459c_c_d.jpg",
        "https://live.staticflickr.com/65535/49933816417_729b5ce484_c_d.jpg",
        "https://live.staticflickr.com/65535/49932998158_a7432bb341_c_d.jpg",
        "https://live.staticflickr.com/65535/49933820767_3fd723dbe5_c_d.jpg",
        "https://live.staticflickr.com/65535/49933007598_1f967424bb_c_d.jpg",
        "https://live.staticflickr.com/65535/49933527466_09780992bd_c_d.jpg" ]} />
        </Box>
        </Flex>
      </Section>
      <a id="music">Musics</a>
      <Section dark>
        <Title small>Musics</Title>
        <Flex alignItems="center" flexDirection="column">
          <Box px={2} width={[1, 1 / 2]}>
            <p>Listen to my musics!</p>
            <Iframe width="100%" height="450" scrolling="no" frameBorder="no" allow="autoplay"
  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/197229086&color=%23333335&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"/>
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
        <br />
        <span>Languages I enjoy working with.</span>
          <Flex alignItems="center" flexDirection="column">
              <Box px={2} width={[1, 1 / 3]}>
                  <figure><embed src="https://wakatime.com/share/@tubone/5306754c-dfb1-45dc-a9ec-e4a276518529.svg"/></figure>
              </Box>
          </Flex>
        <br />
        <br />
        <span>What do I think in twitter?</span>
        <Flex alignItems="center" flexDirection="column">
          <Box px={2} width={[1, 1 / 3]}>
            <img src="https://raw.githubusercontent.com/tubone24/auto_tweet_wordcloud/master/word_cloud_tweet_face_profile_alpha.png"/>
          </Box>
        </Flex>
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
      <Section dark>
        <Title>Resume</Title>
        <Flex alignItems="center" flexDirection="column">
          <Box px={2} width={[1, 1 / 2]}>
            <p>Check my Resume!</p>
          </Box>
          <a href="https://tubone24.github.io/resume">
            <Box px={2} width={180}>
              <DarkButton
              >
                Hire Me!
              </DarkButton>
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
