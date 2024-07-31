import type { Meta, StoryObj } from "@storybook/react";
import { AboutUsCard } from "./AboutUsCard";

const meta: Meta<typeof AboutUsCard> = {
  title: "ui-kit/AboutUsCard",
  component: AboutUsCard,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof AboutUsCard>;

export const Default: Story = {
  args: {},
};

export default meta;
