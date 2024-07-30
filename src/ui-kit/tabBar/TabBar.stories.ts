import { TabBar } from "./TabBar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TabBar> = {
  title: "ui-kit/TabBar",
  component: TabBar,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof TabBar>;

export const Default: Story = {
  args: {},
};

export default meta;
