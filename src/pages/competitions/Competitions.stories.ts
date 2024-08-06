import type { Meta, StoryObj } from "@storybook/react";
import { Competitions } from "./Competitions";

const meta: Meta<typeof Competitions> = {
  title: "pages/Competitions",
  component: Competitions,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Competitions>;

export const Default: Story = {
  args: {},
};

export default meta;
