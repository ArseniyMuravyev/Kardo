import { Tab } from "./Tab";
import type { Meta, StoryObj } from "@storybook/react";
import { HomeIcon } from "../icons/home/HomeIcon";

const meta: Meta<typeof Tab> = {
  title: "ui-kit/Tab",
  component: Tab,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  args: {
    link: "/",
    title: "Главная",
    isActive: true,
    icon: <HomeIcon />,
  },
};

export default meta;
