import React from "react";
import { render } from "@testing-library/react";
import Carousel from "../../../src/components/carousel";

// Gatsbyのモック
jest.mock("gatsby", () => ({
  useStaticQuery: jest.fn(),
  graphql: jest.fn(),
}));

// gatsby-imageのモック
jest.mock("gatsby-image", () => {
  return jest.fn(({ alt }) => <img alt={alt} data-testid="mocked-gatsby-image" />);
});

// react-imagesのモック
jest.mock("react-images", () => {
  return jest.fn(() => <div data-testid="mocked-lightbox" />);
});

// nuka-carouselのモック
jest.mock("nuka-carousel", () => {
  return jest.fn(({ children }) => <div data-testid="mocked-carousel">{children}</div>);
});

const mockHeroImages = [
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
];

test("Renders carousel component", () => {
  const { useStaticQuery } = require("gatsby");
  useStaticQuery.mockReturnValue({
    allFile: {
      nodes: mockHeroImages,
    },
  });

  const { getByTestId } = render(<Carousel />);
  expect(getByTestId("mocked-carousel")).toBeInTheDocument();
});
