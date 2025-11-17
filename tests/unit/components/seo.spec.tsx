import React from "react";
import { render } from "@testing-library/react";
import { Helmet } from "react-helmet";
import SEO from "../../../src/components/seo";

// Gatsbyのモック
jest.mock("gatsby", () => ({
  useStaticQuery: jest.fn(),
  graphql: jest.fn(),
}));

const mockSiteMetadata = {
  site: {
    siteMetadata: {
      title: "tubone24 Portfolio",
      siteUrl: "https://portfolio.tubone-project24.xyz",
    },
  },
};

describe("SEO Component", () => {
  beforeEach(() => {
    const { useStaticQuery } = require("gatsby");
    useStaticQuery.mockReturnValue(mockSiteMetadata);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Renders with default metadata", () => {
    render(<SEO />);
    const helmet = Helmet.peek();

    expect(helmet.title).toBe("tubone24 Portfolio");
    expect(helmet.metaTags.find((tag: { name: string }) => tag.name === "description")?.content).toBe(
      "Full-stack developer portfolio showcasing web development, photography, and music projects."
    );
  });

  test("Renders with custom title", () => {
    render(<SEO title="Custom Page" />);
    const helmet = Helmet.peek();

    expect(helmet.title).toBe("Custom Page | tubone24 Portfolio");
  });

  test("Renders with custom description", () => {
    render(<SEO description="This is a custom description" />);
    const helmet = Helmet.peek();

    const descriptionTag = helmet.metaTags.find((tag: { name: string }) => tag.name === "description");
    expect(descriptionTag?.content).toBe("This is a custom description");
  });

  test("Renders with noindex flag", () => {
    render(<SEO noindex={true} />);
    const helmet = Helmet.peek();

    const robotsTag = helmet.metaTags.find((tag: { name: string }) => tag.name === "robots");
    expect(robotsTag?.content).toBe("noindex, nofollow");
  });

  test("Renders without noindex flag", () => {
    render(<SEO noindex={false} />);
    const helmet = Helmet.peek();

    const robotsTag = helmet.metaTags.find((tag: { name: string }) => tag.name === "robots");
    expect(robotsTag?.content).toContain("index, follow");
  });

  test("Renders with article type and metadata", () => {
    const article = {
      publishedTime: "2023-01-01T00:00:00.000Z",
      modifiedTime: "2023-01-02T00:00:00.000Z",
      author: "tubone24",
      section: "Technology",
      tags: ["React", "TypeScript"],
    };

    render(
      <SEO
        title="Test Article"
        type="article"
        article={article}
      />
    );
    const helmet = Helmet.peek();

    expect(helmet.metaTags.find((tag: { property: string }) => tag.property === "og:type")?.content).toBe("article");
    expect(helmet.metaTags.find((tag: { property: string }) => tag.property === "article:published_time")?.content).toBe(
      article.publishedTime
    );
    expect(helmet.metaTags.find((tag: { property: string }) => tag.property === "article:author")?.content).toBe(
      article.author
    );
  });

  test("Renders with custom OG image", () => {
    const customImage = "https://example.com/custom-image.jpg";
    render(<SEO image={customImage} />);
    const helmet = Helmet.peek();

    expect(helmet.metaTags.find((tag: { property: string }) => tag.property === "og:image")?.content).toBe(customImage);
  });

  test("Renders Twitter card metadata", () => {
    render(<SEO twitter={{ card: "summary_large_image", site: "@tubone24", creator: "@tubone24" }} />);
    const helmet = Helmet.peek();

    expect(helmet.metaTags.find((tag: { name: string }) => tag.name === "twitter:card")?.content).toBe("summary_large_image");
    expect(helmet.metaTags.find((tag: { name: string }) => tag.name === "twitter:site")?.content).toBe("@tubone24");
  });

  test("Renders canonical URL", () => {
    const canonicalUrl = "https://portfolio.tubone-project24.xyz/test-page";
    render(<SEO canonical={canonicalUrl} />);
    const helmet = Helmet.peek();

    expect(helmet.linkTags.find((tag: { rel: string }) => tag.rel === "canonical")?.href).toBe(canonicalUrl);
  });

  test("Renders with custom language", () => {
    render(<SEO lang="en" />);
    const helmet = Helmet.peek();

    expect(helmet.htmlAttributes.lang).toBe("en");
  });
});
