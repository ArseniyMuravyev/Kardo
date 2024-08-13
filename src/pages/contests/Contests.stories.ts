import type { Meta, StoryObj } from "@storybook/react";
import { ContestsPage } from "./Contests";

const meta: Meta<typeof ContestsPage> = {
  title: "pages/ContestsPage",
  component: ContestsPage,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof ContestsPage>;

export const Default: Story = {
  args: {},
};

export default meta;
