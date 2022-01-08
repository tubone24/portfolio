import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../../../src/components/footer";

test("Displays the correct name", () => {
  const { getByText } = render(<Footer />);
  screen.debug();
  expect(getByText("tubone24").getAttribute("href")).toEqual("/");
});
