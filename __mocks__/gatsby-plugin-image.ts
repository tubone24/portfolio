import React from 'react';

export const GatsbyImage = ({ image, alt = '', ...rest }: any) => {
  const src =
    image?.images?.fallback?.src ||
    image?.fallback?.src ||
    image?.src ||
    '';
  return <img src={src} alt={alt} {...rest} />;
};
export const StaticImage = (props: any) => <img {...props} />;
export const getImage = (data: any) => data;
export const getSrc = (data: any) =>
  data?.images?.fallback?.src || data?.fallback?.src || data?.src || '';
