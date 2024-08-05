import type { Meta, StoryObj } from "@storybook/react";
import { Profile } from "./Profile";

const meta: Meta<typeof Profile> = {
  title: "pages/Profile",
  component: Profile,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Profile>;

export const Default: Story = {
  args: {},
};

export default meta;
