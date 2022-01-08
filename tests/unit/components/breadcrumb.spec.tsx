import React from "react";
import { render, screen } from "@testing-library/react";
import Breadcrumb, { Crumb } from "../../../src/components/breadcrumb";

describe("Displays Crumbs", () => {
  it("2crumbs", () => {
    const crumbs: Crumb[] = [
      { name: "home", link: "/" },
      { name: "portfolio", link: "/#portfolio" },
    ];
    const { getByText } = render(<Breadcrumb crumbs={crumbs} />);
    screen.debug();
    expect(getByText("home")).toBeInTheDocument();
    expect(getByText("home").getAttribute("href")).toEqual("/");
    expect(getByText("portfolio")).toBeInTheDocument();
    expect(getByText("portfolio").getAttribute("href")).toEqual("/#portfolio");
  });
  it("1crumb", () => {
    const crumbs: Crumb[] = [{ name: "home", link: "/" }];
    const { getByText } = render(<Breadcrumb crumbs={crumbs} />);
    screen.debug();
    expect(getByText("home")).toBeInTheDocument();
    expect(getByText("home").getAttribute("href")).toEqual("/");
  });
  it("no crumb", () => {
    const crumbs: Crumb[] = [];
    const { queryByText } = render(<Breadcrumb crumbs={crumbs} />);
    screen.debug();
    expect(queryByText("home")).toEqual(null);
  });
});
