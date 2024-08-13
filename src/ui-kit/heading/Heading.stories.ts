import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";

const meta: Meta<typeof Heading> = {
  title: "ui-kit/Heading",
  component: Heading,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: "Heading",
    type: "h2",
  },
};

export default meta;
