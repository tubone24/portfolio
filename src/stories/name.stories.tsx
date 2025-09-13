import type { Meta, StoryObj } from "@storybook/react";
import Name from "../components/name";

const meta: Meta<typeof Name> = {
  title: "Components/Name",
  component: Name,
};
export default meta;

type Story = StoryObj<typeof Name>;

export const Default: Story = {};
