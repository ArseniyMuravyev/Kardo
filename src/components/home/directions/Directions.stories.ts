import type { Meta, StoryObj } from "@storybook/react";
import { Directions } from "./Directions";

const meta: Meta<typeof Directions> = {
  title: "components/Directions",
  component: Directions,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Directions>;

export const Default: Story = {
  args: {},
};

export default meta;
