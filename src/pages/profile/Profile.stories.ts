import type { Meta, StoryObj } from "@storybook/react";
import { ProfilePage } from "./Profile";

const meta: Meta<typeof ProfilePage> = {
  title: "pages/ProfilePage",
  component: ProfilePage,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof ProfilePage>;

export const Default: Story = {
  args: {},
};

export default meta;
