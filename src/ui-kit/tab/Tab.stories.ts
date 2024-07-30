import { Tab } from "./Tab";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tab> = {
  title: "ui-kit/Tab",
  component: Tab,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  args: {
    title: "Главная",
    isActive: true,
  },
};

export default meta;
