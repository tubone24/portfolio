import React from 'react';

// gatsby-linkのモック
const GatsbyLink = ({ to, children, ...props }) => 
  React.createElement('a', { href: to, ...props }, children);

export const Link = GatsbyLink;
export default GatsbyLink;