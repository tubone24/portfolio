import React from "react";
import { render, screen } from "@testing-library/react";
import Carousel from "../../../src/components/carousel";

test("Displays the correct images", () => {
  const { getByAltText } = render(
    <Carousel images={["test1.png", "test2.png"]} />
  );
  screen.debug();
  expect(getByAltText("test1.png").getAttribute("src")).toEqual("test1.png");
  expect(getByAltText("test2.png").getAttribute("src")).toEqual("test2.png");
});
