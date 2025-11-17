import React from "react";
import { render } from "@testing-library/react";
import { Button } from "../../../src/components/button";

describe("Button Component", () => {
  test("Renders button with default styles", () => {
    const { container } = render(<Button>Click Me</Button>);
    const button = container.querySelector("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click Me");
  });

  test("Renders button with light prop", () => {
    const { container } = render(<Button light>Light Button</Button>);
    const button = container.querySelector("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Light Button");
  });

  test("Renders button with dark prop", () => {
    const { container } = render(<Button dark>Dark Button</Button>);
    const button = container.querySelector("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Dark Button");
  });

  test("Renders button with opaque prop", () => {
    const { container } = render(<Button opaque>Opaque Button</Button>);
    const button = container.querySelector("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Opaque Button");
  });

  test("Renders button with small prop", () => {
    const { container } = render(<Button small>Small Button</Button>);
    const button = container.querySelector("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Small Button");
  });

  test("Renders button with extremeSmall prop", () => {
    const { container } = render(<Button extremeSmall>Tiny Button</Button>);
    const button = container.querySelector("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Tiny Button");
  });

  test("Renders button with wave prop", () => {
    const { container } = render(<Button wave>Wave Button</Button>);
    const button = container.querySelector("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Wave Button");
  });

  test("Renders button with multiple props combined", () => {
    const { container } = render(
      <Button dark small>
        Combined Props
      </Button>
    );
    const button = container.querySelector("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Combined Props");
  });

  test("Button is clickable", () => {
    const handleClick = jest.fn();
    const { container } = render(<Button onClick={handleClick}>Click Me</Button>);
    const button = container.querySelector("button");

    button?.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("Renders button with custom className", () => {
    const { container } = render(<Button className="custom-class">Custom</Button>);
    const button = container.querySelector("button");

    expect(button).toHaveClass("custom-class");
  });

  test("Button can be disabled", () => {
    const { container } = render(<Button disabled>Disabled Button</Button>);
    const button = container.querySelector("button");

    expect(button).toBeDisabled();
  });

  test("Renders button with type attribute", () => {
    const { container } = render(<Button type="submit">Submit</Button>);
    const button = container.querySelector("button");

    expect(button).toHaveAttribute("type", "submit");
  });

  test("Renders button with all variant props", () => {
    const { container: lightContainer } = render(<Button light>Light</Button>);
    const { container: darkContainer } = render(<Button dark>Dark</Button>);
    const { container: opaqueContainer } = render(<Button opaque>Opaque</Button>);
    const { container: centerContainer } = render(<Button center>Center</Button>);

    expect(lightContainer.querySelector("button")).toBeInTheDocument();
    expect(darkContainer.querySelector("button")).toBeInTheDocument();
    expect(opaqueContainer.querySelector("button")).toBeInTheDocument();
    expect(centerContainer.querySelector("button")).toBeInTheDocument();
  });
});
