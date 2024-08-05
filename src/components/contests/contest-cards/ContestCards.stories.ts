import type { Meta, StoryObj } from "@storybook/react";
import { ContestCards } from "./ContestCards";

const meta: Meta<typeof ContestCards> = {
  title: "components/ContestCards",
  component: ContestCards,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof ContestCards>;

export const Default: Story = {
  args: {},
};

export default meta;
