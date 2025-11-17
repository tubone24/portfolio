import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from "../../../src/components/navbar";

// scroll-to-elementのモック
jest.mock("scroll-to-element", () => jest.fn());

// Nameコンポーネントのモック
jest.mock("../../../src/components/name", () => {
  return jest.fn(() => <div data-testid="mocked-name">tubone24</div>);
});

describe("NavBar Component", () => {
  let mockScrollToElement: jest.Mock;

  beforeEach(() => {
    mockScrollToElement = require("scroll-to-element");
    mockScrollToElement.mockClear();
  });

  test("Renders Name component", () => {
    const children = [
      { props: { id: "section1", children: "Section 1" } },
    ];

    render(<NavBar>{children}</NavBar>);

    expect(screen.getByTestId("mocked-name")).toBeInTheDocument();
  });

  test("Renders navigation links from children props", () => {
    const children = [
      { props: { id: "about", children: "About" } },
      { props: { id: "portfolio", children: "Portfolio" } },
      { props: { id: "contact", children: "Contact" } },
    ];

    render(<NavBar>{children}</NavBar>);

    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Portfolio")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  test("Filters out children without id prop", () => {
    const children = [
      { props: { id: "section1", children: "Section 1" } },
      { props: { children: "No ID" } },
      { props: { id: "section2", children: "Section 2" } },
    ];

    render(<NavBar>{children}</NavBar>);

    expect(screen.getByText("Section 1")).toBeInTheDocument();
    expect(screen.getByText("Section 2")).toBeInTheDocument();
    expect(screen.queryByText("No ID")).not.toBeInTheDocument();
  });

  test("Calls scrollToElement when link is clicked", () => {
    const children = [
      { props: { id: "about", children: "About" } },
    ];

    render(<NavBar>{children}</NavBar>);

    const link = screen.getByText("About");
    fireEvent.click(link);

    expect(mockScrollToElement).toHaveBeenCalledWith("#about");
  });

  test("Renders with dark prop", () => {
    const children = [
      { props: { id: "section1", children: "Section 1" } },
    ];

    const { container } = render(<NavBar dark={true}>{children}</NavBar>);

    // styled-componentsのプロップが適用されていることを確認
    expect(container.querySelector('[role="navigation"]')).toBeInTheDocument();
  });

  test("Renders with main prop", () => {
    const children = [
      { props: { id: "section1", children: "Section 1" } },
    ];

    const { container } = render(<NavBar main={true}>{children}</NavBar>);

    expect(container.querySelector('[role="navigation"]')).toBeInTheDocument();
  });

  test("Reverses the order of links", () => {
    const children = [
      { props: { id: "first", children: "First" } },
      { props: { id: "second", children: "Second" } },
      { props: { id: "third", children: "Third" } },
    ];

    const { container } = render(<NavBar>{children}</NavBar>);
    const listItems = container.querySelectorAll("li");

    // リンクが逆順でレンダリングされることを確認
    expect(listItems[0]).toHaveTextContent("Third");
    expect(listItems[1]).toHaveTextContent("Second");
    expect(listItems[2]).toHaveTextContent("First");
  });

  test("Handles empty children array", () => {
    const children: { props: { id: string; children: string } }[] = [];

    const { container } = render(<NavBar>{children}</NavBar>);

    // Nameコンポーネントは表示されるが、リンクは表示されない
    expect(screen.getByTestId("mocked-name")).toBeInTheDocument();
    expect(container.querySelectorAll("li")).toHaveLength(0);
  });
});
