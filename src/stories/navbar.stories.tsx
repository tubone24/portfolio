import type { Meta, StoryObj } from "@storybook/react";
import NavBar from "../components/navbar";

const meta: Meta<typeof NavBar> = {
  title: "Components/NavBar",
  component: NavBar,
  parameters: {
    backgrounds: {
      default: "twitter",
      values: [
        { name: "twitter", value: "#00aced" },
        { name: "facebook", value: "#3b5998" },
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof NavBar>;

const children = [
  { props: { id: "#about-me", children: "about" } },
  { props: { id: "#portfolio", children: "portfolio" } },
  { props: { id: "#hobby", children: "hobby" } },
];

export const Dark: Story = {
  args: { dark: true, children },
};

export const Main: Story = {
  args: { main: true, children },
};
