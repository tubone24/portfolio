import React from "react";
import { graphql } from "gatsby";
import styled, { css } from "styled-components";
import TimeAgo from "react-timeago";
import { Flex, Box } from "grid-styled";
import { getSrc } from "gatsby-plugin-image";

import Breadcrumb from "../components/breadcrumb";
import Bar from "../components/bar";
import SEO from "../components/seo";
import Layout from "../components/layout";
import "prismjs/themes/prism-twilight.css";

const Header = styled.div<{ image?: string }>`
  height: fit-contents;
  padding: 0;
  background: #292929;
  position: relative;
  overflow: hidden;
  ${(props) =>
    props.image &&
    css`
      background-image: url(${props.image});
      background-size: cover;
      opacity: 0.5;
    `}

  & > div {
    max-width: 600px;
    padding-top: 120px;
    margin: auto;
  }
`;

const Tags = styled.ol`
  margin: 0;
  float: right;
  list-style: none;

  & li a,
  & li {
    display: inline-block;
    color: #222;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
  }

  & > li + li::before {
    padding: 0 8px;
    color: #444;
    content: "|";
    font-weight: 400;
  }
`;

const Content = styled.div`
  max-width: 960px;
  padding: 0 1.0875rem 1.45rem;
  padding-top: 5vh;
  margin: 0 auto;

  hr {
    margin: 0 0 40px;
  }
`;

const Title = styled.h1`
  margin-top: 0;
  color: #fff;
  text-transform: capitalize;
`;

const Timestamp = styled.i`
  float: right;
`;

const TimeToRead = styled.h5`
  display: inline-block;
  margin-top: 0.5em;
  text-transform: uppercase;
`;

type Props = {
  data: GatsbyTypes.BlogPostQueryQuery;
  location: Location;
};

export default ({ data, location }: Props) => {
  const post = data.markdownRemark;
  const crumbs = [
    { name: "home", link: "/" },
    { name: "portfolio", link: "/#portfolio" },
    { name: post?.frontmatter?.title, link: location.pathname },
  ];
  const tags = post?.frontmatter?.tags?.map(function (tag) {
    return <li key={tag}>{tag}</li>;
  });

  const postImage = post?.frontmatter?.image?.childImageSharp?.gatsbyImageData
    ? getSrc(post.frontmatter.image.childImageSharp.gatsbyImageData)
    : undefined;

  const excerpt = post?.excerpt || post?.frontmatter?.title || "";

  return (
    <>
      <SEO
        title={post?.frontmatter?.title || "Blog Post"}
        description={excerpt}
        image={postImage}
        type="article"
        url={`https://portfolio.tubone-project24.xyz${location.pathname}`}
        article={{
          publishedTime: post?.frontmatter?.date || undefined,
          tags: post?.frontmatter?.tags || undefined,
          author: "tubone24",
        }}
        twitter={{
          card: "summary_large_image",
        }}
      />
      <Header>
        <Flex flexWrap="wrap">
          <Box px={2} width={[1, 2 / 3, 1 / 3]}>
            <Title>{post?.frontmatter?.title}</Title>
          </Box>
          <Box px={2} width={[1, 2 / 3]}>
            <Breadcrumb crumbs={crumbs} />
          </Box>
          <Box px={2} width={[1]}>
            <Bar />
          </Box>
        </Flex>
      </Header>
      <Content>
        <TimeToRead>{post?.timeToRead} min read</TimeToRead>
        <Tags>{tags}</Tags>
        <Bar />
        <div dangerouslySetInnerHTML={{ __html: post?.html || "" }} />
        <Timestamp>
          Posted: <TimeAgo date={post?.frontmatter?.date || ""} />
        </Timestamp>
      </Content>
    </>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 160)
      timeToRead
      frontmatter {
        title
        date
        tags
        image {
          childImageSharp {
            gatsbyImageData(width: 1200, height: 630, quality: 90)
          }
        }
      }
    }
  }
`;
