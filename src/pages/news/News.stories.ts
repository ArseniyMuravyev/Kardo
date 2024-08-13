import type { Meta, StoryObj } from "@storybook/react";
import { NewsPage } from "./News";

const meta: Meta<typeof NewsPage> = {
  title: "pages/NewsPage",
  component: NewsPage,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof NewsPage>;

export const Default: Story = {
  args: {},
};

export default meta;
