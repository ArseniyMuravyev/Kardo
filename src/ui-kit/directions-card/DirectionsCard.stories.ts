import type { Meta, StoryObj } from "@storybook/react";
import { DirectionsCard } from "./DirectionsCard";
import { directions } from "../../data";

const meta: Meta<typeof DirectionsCard> = {
  title: "ui-kit/DirectionsCard",
  component: DirectionsCard,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof DirectionsCard>;

export const Default: Story = {
  args: {
    data: directions[0],
  },
};

export default meta;
