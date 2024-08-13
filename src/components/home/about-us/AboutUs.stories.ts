import type { Meta, StoryObj } from "@storybook/react";
import { AboutUs } from "./AboutUs";

const meta: Meta<typeof AboutUs> = {
  title: "components/AboutUs",
  component: AboutUs,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof AboutUs>;

export const Default: Story = {
  args: {},
};

export default meta;
