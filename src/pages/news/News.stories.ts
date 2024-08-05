import type { Meta, StoryObj } from "@storybook/react";
import { News } from "./News";

const meta: Meta<typeof News> = {
  title: "pages/News",
  component: News,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof News>;

export const Default: Story = {
  args: {},
};

export default meta;
