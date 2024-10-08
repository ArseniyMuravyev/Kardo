import type { Meta, StoryObj } from "@storybook/react";
import { HomePage } from "./Home";

const meta: Meta<typeof HomePage> = {
  title: "pages/HomePage",
  component: HomePage,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof HomePage>;

export const Default: Story = {
  args: {},
};

export default meta;
