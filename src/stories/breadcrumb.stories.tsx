import type { Meta, StoryObj } from "@storybook/react-vite";
import BreadCrumb from "../components/breadcrumb";

const meta: Meta<typeof BreadCrumb> = {
  title: "Components/BreadCrumb",
  component: BreadCrumb,
};
export default meta;

type Story = StoryObj<typeof BreadCrumb>;

export const Default: Story = {
  args: {
    dark: false,
    crumbs: [
      { name: "test", link: "/" },
      { name: "test2", link: "/2" },
    ],
  },
};
