import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Example/Introduction",
};
export default meta;

type Story = StoryObj;

export const Page: Story = {
  render: () => (
    <div style={{ padding: 16 }}>
      <h1>Welcome to Storybook</h1>
      <p>
        Storybook helps you build UI components in isolation from your app&apos;s business logic,
        data, and context. Browse stories in the sidebar.
      </p>
      <p>Edit stories under src/stories to get started.</p>
    </div>
  ),
};
