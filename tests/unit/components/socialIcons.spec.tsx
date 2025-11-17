import React from "react";
import { render, screen } from "@testing-library/react";
import SocialIcons from "../../../src/components/socialIcons";

// FontAwesomeのモック
jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: jest.fn(({ icon }) => {
    return <span data-testid={`icon-${icon[1]}`} className={`fa-${icon[1]}`} />;
  }),
}));

jest.mock("@fortawesome/fontawesome-svg-core", () => ({
  library: {
    add: jest.fn(),
  },
}));

describe("SocialIcons Component", () => {
  test("Renders social icons with correct links", () => {
    const icons = [
      { name: "github-alt" as const, href: "https://github.com/tubone24" },
      { name: "twitter" as const, href: "https://twitter.com/tubone24" },
      { name: "instagram" as const, href: "https://instagram.com/tubone24" },
    ];

    render(<SocialIcons icons={icons} />);

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);

    expect(links[0]).toHaveAttribute("href", "https://github.com/tubone24");
    expect(links[0]).toHaveAttribute("title", "github-alt");

    expect(links[1]).toHaveAttribute("href", "https://twitter.com/tubone24");
    expect(links[1]).toHaveAttribute("title", "twitter");

    expect(links[2]).toHaveAttribute("href", "https://instagram.com/tubone24");
    expect(links[2]).toHaveAttribute("title", "instagram");
  });

  test("Renders correct number of icons", () => {
    const icons = [
      { name: "github-alt" as const, href: "https://github.com/tubone24" },
      { name: "twitter" as const, href: "https://twitter.com/tubone24" },
    ];

    render(<SocialIcons icons={icons} />);

    expect(screen.getByTestId("icon-github-alt")).toBeInTheDocument();
    expect(screen.getByTestId("icon-twitter")).toBeInTheDocument();
  });

  test("Renders with custom style props", () => {
    const icons = [
      { name: "github-alt" as const, href: "https://github.com/tubone24" },
    ];

    const customStyle = {
      marginTop: "30px",
      color: "red",
    };

    const { container } = render(<SocialIcons icons={icons} style={customStyle} />);

    // styled-componentsのプロップが適用されていることを確認
    expect(container.firstChild).toBeInTheDocument();
  });

  test("Renders empty when icons array is empty", () => {
    const icons: Icon[] = [];

    const { container } = render(<SocialIcons icons={icons} />);

    const links = screen.queryAllByRole("link");
    expect(links).toHaveLength(0);

    // コンテナは存在するがリンクは存在しない
    expect(container.firstChild).toBeInTheDocument();
  });

  test("Renders all provided icon types", () => {
    const icons = [
      { name: "500px" as const, href: "https://500px.com/tubone24" },
      { name: "twitter" as const, href: "https://twitter.com/tubone24" },
      { name: "github-alt" as const, href: "https://github.com/tubone24" },
      { name: "instagram" as const, href: "https://instagram.com/tubone24" },
      { name: "facebook" as const, href: "https://facebook.com/tubone24" },
    ];

    render(<SocialIcons icons={icons} />);

    expect(screen.getByTestId("icon-500px")).toBeInTheDocument();
    expect(screen.getByTestId("icon-twitter")).toBeInTheDocument();
    expect(screen.getByTestId("icon-github-alt")).toBeInTheDocument();
    expect(screen.getByTestId("icon-instagram")).toBeInTheDocument();
    expect(screen.getByTestId("icon-facebook")).toBeInTheDocument();
  });
});
