import type { Meta, StoryObj } from "@storybook/react-vite";
import Music from "../components/music";

const meta: Meta<typeof Music> = {
  title: "Components/Music",
  component: Music,
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

type Story = StoryObj<typeof Music>;

export const Default: Story = {};
