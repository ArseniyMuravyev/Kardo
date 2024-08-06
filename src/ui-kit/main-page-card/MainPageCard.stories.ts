import type { Meta, StoryObj } from "@storybook/react";
import { MainPageCard } from "./MainPageCard";

const meta: Meta<typeof MainPageCard> = {
  title: "ui-kit/MainPageCard",
  component: MainPageCard,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof MainPageCard>;

export const Default: Story = {
  args: {
    title: "Competition title",
  },
};

export default meta;
