import type { Meta, StoryObj } from "@storybook/react-vite";
import Bar from "../components/bar";

const meta: Meta<typeof Bar> = {
  title: "Components/Bar",
  component: Bar,
};
export default meta;

type Story = StoryObj<typeof Bar>;

export const Default: Story = {};
