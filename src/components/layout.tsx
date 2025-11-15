import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Footer from "./footer";
import SEO from "./seo";

const GlobalStyle = createGlobalStyle`
  @import url("//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

  html {
    max-width: 100vw;
    overflow-x: hidden;
  }
`;

const Body = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  flex-direction: column;

  img {
    margin-bottom: 0;
  }
`;

const Content = styled.div`
  flex: 1;
`;

type Props = {
  location?: Location;
  children?: React.ReactChild[];
  title?: string;
  description?: string;
  image?: string;
  type?: "website" | "article" | "profile";
  noindex?: boolean;
};

const PageBase = ({ location, children, title, description, image, type, noindex }: Props): JSX.Element => {
  return (
    <Body>
      <GlobalStyle />
      <SEO
        title={title}
        description={description}
        image={image}
        type={type}
        noindex={noindex}
        url={location ? `https://portfolio.tubone-project24.xyz${location.pathname}` : undefined}
      />
      <Content>{children}</Content>
      {location && location.pathname !== "/404" && <Footer />}
    </Body>
  );
};

export default PageBase;
