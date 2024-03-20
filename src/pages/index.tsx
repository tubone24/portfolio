import React from "react";
import { graphql } from "gatsby";
import { Flex, Box } from "grid-styled";
import styled, { css } from "styled-components";
import scrollToElement from "scroll-to-element";
import FlickrHero from "../components/flickrHero";
import { media } from "../utils/style";
import Layout from "../components/layout";
import NavBar from "../components/navbar";
import HeroText from "../components/heroText";
import SocialIcons from "../components/socialIcons";
import Portfolio from "../components/portfolio";
import Showcase from "../components/showcase";
import Button from "../components/button";
import GitHubWeed from "../components/githubWeed";
import AboutMe from "../components/aboutme";
import PhotoList from "../components/photoList";
import Music from "../components/music";
import ContactForm from "../components/contactForm";
import Img from "gatsby-image";

const Content = styled.div`
  & > a {
    visibility: hidden;
    display: block;
    height: 0;
  }
  & > h1 {
    text-align: center;
  }
`;

const Title = styled.h1<{ small?: boolean; dark?: boolean }>`
  font-family: "Raleway";
  text-transform: uppercase;
  letter-spacing: 6px;
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  border: none;
  color: #292929;

  ${(props) =>
    props.small &&
    css`
      font-size: 24px;
      letter-spacing: 2px;
      font-weight: 400;
      line-height: 24px;
    `}

  ${(props) =>
    props.dark &&
    css`
      color: #eee !important;
    `}
`;

const Section = styled.div<{ center?: boolean; dark?: boolean }>`
  text-align: center;
  padding-top: 45px;
  padding-bottom: 40px;

  a {
    font-family: "Lato";
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
    font-family: "Raleway";
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

  ${(props) =>
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

  ${(props) =>
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
`;

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
`;

const HomeButton = styled(Button)`
  position: absolute;
  bottom: 35%;
  left: 20%;
`;

type Props = {
  data: GatsbyTypes.IndexQueryQuery;
  location: Location;
};

export default function (props: Props): JSX.Element {
  const content = (
    <Content>
      <FlickrHero
        api_key="89f4752b9b3a8dffcbf94ca144719883"
        user_id="184992580@N06"
        album_id="72157711319102412"
        fillPage
      />
      <HomeButton opaque light onClick={() => scrollToElement("#about-me")}>
        About me
      </HomeButton>
      <HeroText />
      <SocialIcons
        style={{
          position: "absolute",
          margin: "0 auto",
          left: 0,
          right: 0,
          bottom: 16,
        }}
        icons={[
          {
            name: "twitter",
            href: "https://twitter.com/meitante1conan",
          },
          {
            name: "github-alt",
            href: "https://github.com/tubone24",
          },
          {
            name: "soundcloud",
            href: "https://soundcloud.com/user-453736300",
          },
          {
            name: "slideshare",
            href: "https://www.slideshare.net/tubone24",
          },
          {
            name: "500px",
            href: "https://500px.com/tubone24",
          },
        ]}
      />
      <a id="about-me">About Me</a>
      <Section>
        <Title>About Me</Title>
        <AboutMe allFile={props.data.allFile} />
      </Section>
      <Title small>Portfolio</Title>
      <a id="portfolio">Portfolio</a>
      <Portfolio items={props.data.allMarkdownRemark.edges} />
      <a id="photos">Photos</a>
      <Section>
        <Title small>Photos</Title>
        <PhotoList />
      </Section>
      <a id="music">Musics</a>
      <Section dark>
        <Title small dark>
          Musics
        </Title>
        <Music />
      </Section>
      <a id="blog">Blog</a>
      <Section>
        <Title>Blog</Title>
        <Flex alignItems="center" flexDirection="column">
          <Box px={2} width={[1, 1 / 2]}>
            <span>chech my blog</span>
            {props.data.blogScreenshotSharp.edges[0].node?.childImageSharp?.fluid && <Img fluid={props.data.blogScreenshotSharp.edges[0].node?.childImageSharp?.fluid} />}
          </Box>
          <a href="https://blog.tubone-project24.xyz">
            <Box px={2} width={180}>
              <Button>Read Me!</Button>
            </Box>
          </a>
        </Flex>
      </Section>
      <a id="resume">Resume</a>
      <Section center dark>
        <Title dark>Experience</Title>
        <span>Where I've worked.</span>
        <Item>
          <span>February 2024- Current</span>
          <h6>
            Data Engineering developer
          </h6>
          <p>
            Developing Data Clean Room with Snowflake and AWS.
          </p>
        </Item>
        <Item>
          <span>August 2021- February 2024</span>
          <h6>
            <a href="https://netflixtechblog.com/full-cycle-developers-at-netflix-a08c31f83249">
              Full Cycle
            </a>{" "}
            Developer and Development Team Leader
          </h6>
          <p>
            Developing an event platform using React, Nest.js (TypeScript), and
            AWS.
          </p>
        </Item>
        <Item>
          <span>April 2019- July 2021</span>
          <h6>Data Engineering developer & Tech Lead</h6>
          <p>
            Developing data analysis infrastructure using AWS because of
            analysis of the Chat-bot's conversations.
          </p>
          <p>
            Senior engineer and AWS tech Lead of developing Web-based and Native
            App Chat-bot services by using AWS and Python, Node.js.
          </p>
        </Item>
        <Item>
          <span>October 2017- March 2019</span>
          <h6>DevOps developer</h6>
          <p>
            Developing and Operating Web-based Chatbot services by using AWS and
            Python, Node.js.
          </p>
          <p>
            The architecture is applied by AWS management services such as ECS
            with Docker, DynamoDB, Lambda, and S3.
          </p>
          <p>
            Also, creating CI/CD pipelines using by Drone and automation tests
            using by Pytest.
          </p>
        </Item>
        <Item>
          <span>April 2017- September 2017</span>
          <h6>Project Manager</h6>
          <p>
            I had many experiences such as project management, team building,
            and handling big data. Our team created the analytics operation
            system with Splunk and Hadoop(MapR) Used for the company's internal
            log.
          </p>
        </Item>
        <Item>
          <span>April 2016- March 2017</span>
          <h6>DevOps developer</h6>
          <p>
            Developing and operating some location-based services by using
            on-premise servers.
          </p>
        </Item>
        <h4>Resume</h4>
        <span>More information? Look at my resume.</span>
        <Flex alignItems="left" flexDirection="column">
          <a href="https://tubone24.github.io/resume">
            <Box px={2} width={180}>
              <Button dark opaque>
                Check!
              </Button>
            </Box>
          </a>
        </Flex>
      </Section>
      <a id="contact">Contact</a>
      <Section>
        <Title>Contact</Title>
        <Flex alignItems="center" flexDirection="column">
          <Box px={1} width={[1, 1 / 2]}>
            <p>If you interested, Contact me!</p>
          </Box>
          <ContactForm />
        </Flex>
      </Section>
    </Content>
  );
  return (
    <Layout location={props.location}>
      <NavBar main children={content.props.children} />
      {content}
    </Layout>
  );
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
                fluid(
                  maxWidth: 500
                  duotone: {
                    highlight: "#333333"
                    shadow: "#111111"
                    opacity: 65
                  }
                ) {
                  ...GatsbyImageSharpFluid
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
            fluid(maxWidth: 300, grayscale: true) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
    blogScreenshotSharp: allFile(filter: { name: { regex: "/screenshot-ubuntu-latest-1200/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allFile(filter: { name: { regex: "/tubone24-icon/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 200, grayscale: true) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
