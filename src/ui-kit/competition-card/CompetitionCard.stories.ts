import type { Meta, StoryObj } from "@storybook/react";
import { CompetitionCard } from "./CompetitionCard";

const meta: Meta<typeof CompetitionCard> = {
  title: "ui-kit/CompetitionCard",
  component: CompetitionCard,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof CompetitionCard>;

export const Default: Story = {
  args: {
    title: "Competition title",
  },
};

export default meta;
