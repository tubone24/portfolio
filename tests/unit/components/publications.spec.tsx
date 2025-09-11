import React from "react";
import { render, screen } from "@testing-library/react";
import Publications from "../../../src/components/publications";

test("Renders publications component with books", () => {
  const { getByText } = render(<Publications />);
  
  // Check if publication titles are rendered
  expect(getByText("やさしいMCP入門")).toBeInTheDocument();
  expect(getByText("AIエージェント開発 / 運用入門")).toBeInTheDocument();
  
  // Check if publication years are rendered
  expect(getByText("July 2025")).toBeInTheDocument();
  expect(getByText("October 2025")).toBeInTheDocument();
  
  // Check if author and publisher info is rendered
  expect(getByText("御田稔、大坪悠 / 秀和システム新社")).toBeInTheDocument();
  expect(getByText("御田稔、大坪悠、塚田真規 / SBクリエイティブ")).toBeInTheDocument();
  
  // Check if images are rendered with correct alt text
  const images = screen.getAllByRole("img");
  expect(images).toHaveLength(2);
  expect(images[0]).toHaveAttribute("alt", "やさしいMCP入門");
  expect(images[1]).toHaveAttribute("alt", "AIエージェント開発 / 運用入門");
});

test("Books have correct Amazon links", () => {
  render(<Publications />);
  
  // Check if Amazon links are present
  const links = screen.getAllByRole("link");
  expect(links).toHaveLength(2);
  expect(links[0]).toHaveAttribute("href", "https://amzn.asia/d/drKHEyi");
  expect(links[1]).toHaveAttribute("href", "https://amzn.asia/d/2SURdGV");
  
  // Check if links open in new tab
  expect(links[0]).toHaveAttribute("target", "_blank");
  expect(links[1]).toHaveAttribute("target", "_blank");
});