import React from "react";
import styled, { css } from "styled-components";
import { Flex, Box } from "grid-styled";
import scrollToElement from "scroll-to-element";

import Name from "./name";

import { media } from "../utils/style";

const Base = styled.div<{ dark?: boolean; main?: boolean }>`
  padding: 0;
  margin: 0;
  max-height: 62px;
  line-height: 62px;
  width: 100vw;
  & ul {
    width: 100%;
    height: 62px;
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: 13px;
  }
  & ul > li a,
  & ul > li {
    height: 62px;
    font-size: 11px;
    float: right;
    position: relative;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    transition: opacity 0.3s ease;
  }
  & ul > li a {
    font-family: "Raleway";
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    margin-right: 32px;
  }

  ${(props) =>
    props.dark &&
    css`
      background: #fff;
      & ul > li a,
      & ul > li {
        color: #242424;
        opacity: 0.6;
      }
      & ul > li a:hover {
        opacity: 1;
      }
      a {
        color: #000;
      }
    `}

  ${(props) =>
    props.main &&
    css`
      background: transparent;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
    `}

  ${media.xs`
    & ul {
      display: none;
    }
  `}
`;

interface Children {
  props: {
    id: string;
    children: string;
  };
}

type Props = {
  dark?: boolean;
  main?: boolean;
  children: Children[];
};

const NavBar = (props: Props): JSX.Element => {
  const linkMap = props.children
    .map((el) => {
      if (el.props.id)
        return { name: el.props.children, href: `#${el.props.id}` };
    })
    .filter((n) => n != undefined)
    .reverse();
  const links = linkMap.map((link) => {
    if (link !== undefined) {
      return (
        <li key={link.name}>
          <a
            onClick={() => {
              scrollToElement(link.href);
            }}
          >
            {link.name}
          </a>
        </li>
      );
    }
  });
  return (
    <Base dark={props.dark} main={props.main} role="navigation">
      <Flex>
        <Box px={2} width={[1, 1 / 3, 2 / 6]}>
          <Name />
        </Box>
        <Box px={2} width={[0, 2 / 3, 4 / 6]}>
          <ul>{links}</ul>
        </Box>
      </Flex>
    </Base>
  );
};

export default NavBar;
