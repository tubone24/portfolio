import React from "react";
import { navigate } from "gatsby";
import FlickrHero from "../components/flickrHero";
import styled from "styled-components";

import Layout from "../components/layout";
import Button from "../components/button";
import HeroText from "../components/heroText";
import LocalHero from "../components/localHero";

const HomeButton = styled(Button)`
  position: absolute;
  z-index: 10;
  bottom: 35%;
  left: 20%;
`;

const PageNotFound = (): JSX.Element => (
  <Layout
    title="404 - Page Not Found"
    description="The page you are looking for could not be found."
    noindex={true}
  >
    <LocalHero
      fillPage
    />
    <HomeButton opaque light onClick={() => navigate("/")}>
      Return To Home Page
    </HomeButton>
    <HeroText text="404 Page Not Found" />
  </Layout>
);

export default PageNotFound;
