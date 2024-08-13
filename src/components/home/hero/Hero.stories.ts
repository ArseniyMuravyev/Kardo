import type { Meta, StoryObj } from "@storybook/react";
import { Hero } from "./Hero";

const meta: Meta<typeof Hero> = {
  title: "components/Hero",
  component: Hero,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {},
};

export default meta;
