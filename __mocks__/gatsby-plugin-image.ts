import React from 'react';

interface ImageData {
  images?: {
    fallback?: {
      src?: string;
    };
  };
  fallback?: {
    src?: string;
  };
  src?: string;
}

interface GatsbyImageProps {
  image: ImageData;
  alt?: string;
  [key: string]: unknown;
}

export const GatsbyImage = ({ image, alt = '', ...rest }: GatsbyImageProps) => {
  const src =
    image?.images?.fallback?.src ||
    image?.fallback?.src ||
    image?.src ||
    '';
  return React.createElement('img', { src, alt, ...rest });
};

export const StaticImage = (props: Record<string, unknown>) =>
  React.createElement('img', { ...props });

export const getImage = (data: ImageData) => data;

export const getSrc = (data: ImageData) =>
  data?.images?.fallback?.src || data?.fallback?.src || data?.src || '';
