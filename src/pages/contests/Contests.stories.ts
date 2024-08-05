import type { Meta, StoryObj } from "@storybook/react";
import { Contests } from "./Contests";

const meta: Meta<typeof Contests> = {
  title: "pages/Contests",
  component: Contests,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Contests>;

export const Default: Story = {
  args: {},
};

export default meta;
