import { NavBar } from "./NavBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NavBar> = {
  title: "ui-kit/NavBar",
  component: NavBar,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
  args: {
    isMain: true,
  },
};

export default meta;
