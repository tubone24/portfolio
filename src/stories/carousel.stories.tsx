import type { Meta, StoryObj } from "@storybook/react-vite";
import Carousel from "../components/carousel";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    backgrounds: {
      grid: { cellSize: 10, opacity: 0.5, cellAmount: 15, offsetX: 160, offsetY: 160 },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    images: ["https://i.imgur.com/Kmkrw4El.jpg", "https://i.imgur.com/uY2Lqm7l.jpg"],
  },
};
