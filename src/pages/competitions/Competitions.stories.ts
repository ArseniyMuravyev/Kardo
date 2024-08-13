import type { Meta, StoryObj } from "@storybook/react";
import { CompetitionsPage } from "./Competitions";

const meta: Meta<typeof CompetitionsPage> = {
  title: "pages/Competitions",
  component: CompetitionsPage,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof CompetitionsPage>;

export const Default: Story = {
  args: {},
};

export default meta;
