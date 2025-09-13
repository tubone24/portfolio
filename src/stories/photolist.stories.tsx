import type { Meta, StoryObj } from "@storybook/react-vite";
import PhotoList from "../components/photoList";

const meta: Meta<typeof PhotoList> = {
  title: "Components/PhotoList",
  component: PhotoList,
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
type Story = StoryObj<typeof PhotoList>;

export const Default: Story = {};
