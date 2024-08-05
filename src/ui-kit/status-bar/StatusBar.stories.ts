import { StatusBar } from "./StatusBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof StatusBar> = {
  title: "ui-kit/StatusBar",
  component: StatusBar,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof StatusBar>;

export const Default: Story = {
  args: {},
};

export default meta;
