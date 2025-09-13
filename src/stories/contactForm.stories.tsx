import type { Meta, StoryObj } from "@storybook/react-vite";
import ContactForm from "../components/contactForm";

const meta: Meta<typeof ContactForm> = {
  title: "Components/ContactForm",
  component: ContactForm,
};
export default meta;

type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {};
