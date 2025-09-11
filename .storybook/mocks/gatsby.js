import React from 'react';

// Gatsbyモックの作成
const gatsby = {
  useStaticQuery: () => ({
    allFile: {
      nodes: [
        {
          name: "test1",
          childImageSharp: {
            fixed: { src: "test1-fixed.jpg" },
            fluid: { src: "test1-fluid.jpg", srcSet: "", sizes: "", aspectRatio: 1.33 },
            heroFluid: { src: "test1-hero.jpg", srcSet: "", sizes: "", aspectRatio: 1.33 },
            heroFixed: { src: "test1-hero-fixed.jpg" },
            carouselFluid: { src: "test1-carousel.jpg", srcSet: "", sizes: "", aspectRatio: 1.33 },
            carouselFixed: { src: "test1-carousel-fixed.jpg" },
            lightboxFluid: { src: "test1-lightbox.jpg", srcSet: "", sizes: "", aspectRatio: 1.33 },
          },
        },
        {
          name: "test2",
          childImageSharp: {
            fixed: { src: "test2-fixed.jpg" },
            fluid: { src: "test2-fluid.jpg", srcSet: "", sizes: "", aspectRatio: 1.33 },
            heroFluid: { src: "test2-hero.jpg", srcSet: "", sizes: "", aspectRatio: 1.33 },
            heroFixed: { src: "test2-hero-fixed.jpg" },
            carouselFluid: { src: "test2-carousel.jpg", srcSet: "", sizes: "", aspectRatio: 1.33 },
            carouselFixed: { src: "test2-carousel-fixed.jpg" },
            lightboxFluid: { src: "test2-lightbox.jpg", srcSet: "", sizes: "", aspectRatio: 1.33 },
          },
        },
      ],
    },
  }),
  graphql: () => null,
  Link: ({ to, children, ...props }) => React.createElement('a', { href: to, ...props }, children),
  StaticQuery: ({ children, query, render }) => {
    const data = gatsby.useStaticQuery();
    return render ? render(data) : children(data);
  }
};

export const useStaticQuery = gatsby.useStaticQuery;
export const graphql = gatsby.graphql;
export const Link = gatsby.Link;
export const StaticQuery = gatsby.StaticQuery;

export default gatsby;