import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";

const Base = styled.ol<Props>`
  padding-top: 10px;
  list-style: none;
  margin: 0;

  & li a,
  & li {
    display: inline-block;
    color: #fff;
    font-family: Raleway, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 2px;
    line-height: 24px;
    text-decoration: none;
    text-transform: uppercase;
  }

  & > li + li::before {
    padding: 0 8px;
    color: #ccc;
    content: ">";
  }

  & > li:last-child > a {
    color: #777;
    cursor: default;
    pointer-events: none;
  }

  @media (width >= 831px) {
    float: right;
  }
  ${(props) =>
    props.dark &&
    css`
      & li a,
      & li {
        color: #444;
      }
    `}
`;

export interface Crumb {
  name?: string;
  link?: string;
}

export type Props = {
  crumbs?: Crumb[];
  dark?: boolean;
};

export const Breadcrumb = (props: Props): JSX.Element => {
  const crumbs = props.crumbs?.map(function (crumb) {
    return (
      <li key={crumb.name}>
        <Link to={crumb.link || "/"}>{crumb.name}</Link>
      </li>
    );
  });
  return <Base {...props}>{crumbs}</Base>;
};

export default Breadcrumb;
