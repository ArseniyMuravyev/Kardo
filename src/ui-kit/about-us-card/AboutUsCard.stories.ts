import type { Meta, StoryObj } from "@storybook/react";
import { AboutUsCard } from "./AboutUsCard";

const meta: Meta<typeof AboutUsCard> = {
  title: "ui-kit/AboutUsCard",
  component: AboutUsCard,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof AboutUsCard>;

export const Default: Story = {
  args: {
    title: "миссия",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
};

export default meta;
