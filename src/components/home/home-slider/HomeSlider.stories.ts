import type { Meta, StoryObj } from "@storybook/react";
import { HomeSlider } from "./HomeSlider";

const meta: Meta<typeof HomeSlider> = {
  title: "components/HomeSlider",
  component: HomeSlider,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof HomeSlider>;

export const Default: Story = {
  args: {},
};

export default meta;
