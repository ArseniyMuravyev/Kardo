import type { Meta, StoryObj } from "@storybook/react";
import { ContestCard } from "./ContestCard";
import { contests } from "../../data";

const meta: Meta<typeof ContestCard> = {
  title: "ui-kit/ContestCard",
  component: ContestCard,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof ContestCard>;

export const Default: Story = {
  args: {
    data: contests[0],
  },
};

export default meta;
