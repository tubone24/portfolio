import React, {useState} from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";
import Img from "gatsby-image";

import { media } from "../utils/style";
import Button from "./button";
import Sound from 'react-sound';
import ClickSound from '../components/music/click.mp3';

const Tile = styled.div`
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  position: relative;
  margin-bottom: 32px;
  overflow: hidden;
  & > a > div,
  & > a > div::after {
    z-index: -1;
    transition: all 0.5s ease-in-out;
    transform: skewY(-2.2deg);
  }
  & a > div {
    top: -8px;
  }
  &:hover > a > div {
    transform: scale(1.1);
  }
  &:hover > a > div::after {
    opacity: 0.5;
  }
  img {
    height: 55% !important;
  }
  ${media.ws`
    & > a > div, & > a > div::after {
      transform: skewY(-5.2deg);

    }
  `}
`;

const TileContent = styled.a`
  color: #fff;
  background-color: #000;
  text-decoration: none !important;
  cursor: pointer;
  h1 {
    position: absolute;
    background-color: 'transparent';
    top: 6vw;
    left: 5%;
    right: 5%;
    font-family: 'Raleway';
    border: none;
  }
  p {
    font-size: 1.2em;
    position: absolute;
    bottom: 2vw;
    left: 5%;
    right: 5%;
    color: #111;
    font-family: 'Lato';
    font-weight: 500;
  }

  ${media.md`
    max-width: 90%;
  `}
  ${media.ws`
    p {
      display: none;
    }
    h1 {
      top: 33vw !important;
      color: #000;
    }
  `}
  @media (max-width: 1594px) {
    p {
      bottom: 0;
      font-size: 1em;
    }
    h1 {
      top: 1vw;
    }
 }
 @media (max-width: 1258px) {
   p {
     line-height: 1em;
   }
   h1 {
     margin-top: 1vw;
   }
 @media (max-width: 828px) {
   p {
     line-height: inherit;
   }
   h1 {
     margin-top: 12vw;
   }
 @media (max-width: 640px) {
   p {
     line-height: 1.5em;
     font-size: 1.5em;
   }
 @media (max-width: 440px) {
   p {
     line-height: inherit;
     font-size: 1.1em;
   }
 @media (max-width: 342px) {
   p {
     line-height: 1.2em;
     font-size: 0.95em;
   }
}
`;

type ItemProps = {
  excerpt?: string;
  image?: {
    childImageSharp?: {
      fluid?: Pick<
        GatsbyTypes.GatsbyImageSharpFluidFragment,
        "src" | "srcSet" | "aspectRatio" | "sizes"
      >;
    };
  };
  slug?: string;
  title?: string;
  timeToRead?: number;
};

const Item = ({ excerpt, image, slug, title }: ItemProps): JSX.Element => (
  <Tile>
    <a href={slug}>
      {image?.childImageSharp?.fluid ? (
        <Img fluid={image.childImageSharp.fluid} />
      ) : (
        <div />
      )}
    </a>
    <TileContent href={slug}>
      <h1>{title}</h1>
      <p>{excerpt}</p>
    </TileContent>
  </Tile>
);

interface Node {
  node: {
    excerpt?: string;
    timeToRead?: number;
    fields?: {
      slug?: string;
    };
    frontmatter?: {
      date?: string;
      title?: string;
      tags?: readonly string[];
      image?: {
        childImageSharp?: {
          fluid?: Pick<
            GatsbyTypes.GatsbyImageSharpFluidFragment,
            "src" | "srcSet" | "aspectRatio" | "sizes"
          >;
        };
      };
    };
  };
}

type Props = {
  items: readonly Node[];
};

interface State {
  items: Node[];
  viewAll: boolean;
}
const Portfolio = (props) => {
  const [state, setState] = useState({ viewAll: false });
  const [clickSoundStatus, setClickSoundStatus] = useState('STOPPED');
  const handleClickSoundPlay = () => {
    setClickSoundStatus(Sound.status.PLAYING);
  };
  const toggletOnClickSound = (selector: string) => {
    toggleShow();
    handleClickSoundPlay();
  };

  const toggleShow = () => {
    setState((prevState) => ({ viewAll: !prevState.viewAll }));
  };

  let items = props.items.map((item) => (
    <Box key={item?.node?.fields?.slug} px={2} width={[1, 1 / 2, 1 / 3, 1 / 4]}>
      <Item
        excerpt={item?.node?.excerpt}
        slug={item?.node?.fields?.slug}
        timeToRead={item.node.timeToRead}
        {...item.node.frontmatter}
      />
    </Box>
  ));

  if (!state.viewAll) {
    items = items.slice(0, 4);
  }

  return (
    <Flex justifyContent="center" px={1} flexWrap="wrap">
      {items}
      <Box m="auto">
        <Button center onClick={toggletOnClickSound}>
          {state.viewAll ? 'View Less' : 'View More'}
        </Button>
      </Box>
      <Sound
        url={ClickSound}
        autoLoad={true}
        playStatus={clickSoundStatus}
        playFromPosition={0}
        onFinishedPlaying={() =>
          setClickSoundStatus(Sound.status.STOPPED)
        }
      />
    </Flex>
  );
};

export default Portfolio;
