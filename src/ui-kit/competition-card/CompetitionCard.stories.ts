import type { Meta, StoryObj } from "@storybook/react";
import { CompetitionCard } from "./CompetitionCard";
import { competitions } from "../../data";

const meta: Meta<typeof CompetitionCard> = {
  title: "ui-kit/CompetitionCard",
  component: CompetitionCard,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof CompetitionCard>;

export const Default: Story = {
  args: {
    data: competitions[0],
  },
};

export default meta;
