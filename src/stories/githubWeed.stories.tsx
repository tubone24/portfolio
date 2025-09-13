import type { Meta, StoryObj } from "@storybook/react-vite";
import GitHubWeed from "../components/githubWeed";

const meta: Meta<typeof GitHubWeed> = {
  title: "Components/GitHubWeed",
  component: GitHubWeed,
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

type Story = StoryObj<typeof GitHubWeed>;

export const Default: Story = {};
