import type { Meta, StoryObj } from "@storybook/react-vite";
import HeroText from "../components/heroText";

const meta: Meta<typeof HeroText> = {
  title: "Components/HeroText",
  component: HeroText,
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

type Story = StoryObj<typeof HeroText>;

export const Default: Story = {};
