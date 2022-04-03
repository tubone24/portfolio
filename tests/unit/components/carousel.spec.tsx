import React from "react";
import { render, screen } from "@testing-library/react";
import Carousel from "../../../src/components/carousel";

test("Displays the correct images", () => {
  const { getByAltText } = render(
    <Carousel images={[{ src: "test1.png", title: "test1" }, { src: "test2.png", title: "test2" },]} />
  );
  screen.debug();
  expect(getByAltText("test1").getAttribute("src")).toEqual("test1.png");
  expect(getByAltText("test2").getAttribute("src")).toEqual("test2.png");
});
