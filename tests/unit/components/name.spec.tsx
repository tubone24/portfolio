import React from "react";
import { render, screen } from "@testing-library/react";
import Name from "../../../src/components/name";

test("Displays the correct name", () => {
  const { getByText } = render(<Name />);
  screen.debug();
  expect(getByText("tubone24")).toBeInTheDocument();
  expect(getByText("tubone24").getAttribute("href")).toEqual("/");
});
