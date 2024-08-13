import type { Meta, StoryObj } from "@storybook/react";
import { CompetitionCards } from "./CompetitionCards";

const meta: Meta<typeof CompetitionCards> = {
  title: "components/CompetitionCards",
  component: CompetitionCards,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof CompetitionCards>;

export const Default: Story = {
  args: {},
};

export default meta;
