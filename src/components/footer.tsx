import React from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";
import scrollToElement from "scroll-to-element";
import { FlickrLightbox } from "./flickerLightbox";

import Name from "./name";
import Button from "./button";
import SocialIcons from "./socialIcons";

const Base = styled.div`
  height: fit-contents;
  padding: 0;
  background: #292929;
`;

const FooterText = styled.div`
  padding-top: 6px;
  color: #fff;
  text-align: center;
  a {
    color: #9880dc;
  }
`;

const SocialIconsStyled = styled(SocialIcons)`
  margin-left: -8px;
  text-align: left;
`;

const CenteredButtonBox = styled(Box)`
  margin: 2em auto;
`;

const GalleryContainer = styled.div`
  & > div > div {
    width: fit-content;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Footer = (): JSX.Element => (
  <Base>
    <Flex flexWrap="wrap" justifyContent="space-around">
      <Box px={2} width={[1, 1 / 2, 1 / 3, 1 / 6]}>
        <Flex flexDirection="column">
          <Box>
            <Name block />
          </Box>
          <Box>
            <SocialIconsStyled
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
          </Box>
        </Flex>
      </Box>
      <Box width={[1, 1 / 2, 1 / 3, 1 / 6]}>
        <Flex justifyContent="center" flexDirection="column">
          <Box>
            <FooterText>
              <h4>©tubone24 2017-{new Date().getFullYear()}</h4>
            </FooterText>
          </Box>
          <CenteredButtonBox>
            <Button
              onClick={() => {
                scrollToElement("html");
              }}
              small
              dark
              opaque
            >
              Top
            </Button>
          </CenteredButtonBox>
        </Flex>
      </Box>
      <Box width={[4 / 5, 1 / 2, 1 / 3, 1 / 6]} pt={2}>
        <Flex alignItems="center" justifyContent="center">
          <GalleryContainer>
            <FlickrLightbox
              apiKey="89f4752b9b3a8dffcbf94ca144719883"
              userId="184992580@N06"
              limit={8}
            />
          </GalleryContainer>
        </Flex>
      </Box>
    </Flex>
  </Base>
);

export default Footer;
