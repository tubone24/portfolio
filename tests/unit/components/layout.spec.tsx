import React from "react";
import { render, screen } from "@testing-library/react";
import PageBase from "../../../src/components/layout";

// Gatsbyのモック
jest.mock("gatsby", () => ({
  useStaticQuery: jest.fn(),
  graphql: jest.fn(),
}));

// SEOコンポーネントのモック
jest.mock("../../../src/components/seo", () => {
  return jest.fn(() => <div data-testid="mocked-seo" />);
});

// Footerコンポーネントのモック
jest.mock("../../../src/components/footer", () => {
  return jest.fn(() => <div data-testid="mocked-footer" />);
});

describe("Layout (PageBase) Component", () => {
  beforeEach(() => {
    const { useStaticQuery } = require("gatsby");
    useStaticQuery.mockReturnValue({
      allFile: {
        nodes: [],
      },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Renders children correctly", () => {
    render(
      <PageBase>
        {[<div key="child1">Test Child 1</div>, <div key="child2">Test Child 2</div>]}
      </PageBase>
    );

    expect(screen.getByText("Test Child 1")).toBeInTheDocument();
    expect(screen.getByText("Test Child 2")).toBeInTheDocument();
  });

  test("Renders SEO component", () => {
    render(
      <PageBase title="Test Title" description="Test Description">
        {[<div key="child">Test</div>]}
      </PageBase>
    );

    expect(screen.getByTestId("mocked-seo")).toBeInTheDocument();
  });

  test("Renders Footer when location is not 404", () => {
    const location = { pathname: "/test-page" } as Location;

    render(
      <PageBase location={location}>
        {[<div key="child">Test</div>]}
      </PageBase>
    );

    expect(screen.getByTestId("mocked-footer")).toBeInTheDocument();
  });

  test("Does not render Footer on 404 page", () => {
    const location = { pathname: "/404" } as Location;

    render(
      <PageBase location={location}>
        {[<div key="child">Test</div>]}
      </PageBase>
    );

    expect(screen.queryByTestId("mocked-footer")).not.toBeInTheDocument();
  });

  test("Passes props to SEO component correctly", () => {
    const SEOMock = require("../../../src/components/seo");
    const location = { pathname: "/test" } as Location;

    render(
      <PageBase
        location={location}
        title="Custom Title"
        description="Custom Description"
        image="/custom-image.jpg"
        type="article"
        noindex={true}
      >
        {[<div key="child">Test</div>]}
      </PageBase>
    );

    expect(SEOMock).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "Custom Title",
        description: "Custom Description",
        image: "/custom-image.jpg",
        type: "article",
        noindex: true,
        url: "https://portfolio.tubone-project24.xyz/test",
      }),
      expect.anything()
    );
  });
});
