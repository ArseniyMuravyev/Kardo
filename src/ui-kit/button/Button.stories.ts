import { Button } from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "ui-kit/Button",
  component: Button,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Button>;

export const Filled: Story = {
  args: {
    children: "Кнопка",
    variant: "filled",
    color: "primary",
    size: "large",
  },
};

export const Text: Story = {
  args: {
    children: "Кнопка",
    variant: "text",
    color: "primary",
    size: "medium",
  },
};

export const Outline: Story = {
  args: {
    children: "Кнопка",
    variant: "outline",
    color: "primary",
    size: "small",
  },
};

export const Disabled: Story = {
  args: {
    children: "Кнопка",
    variant: "filled",
    color: "primary",
    size: "large",
    disabled: true,
  },
};

export default meta;
