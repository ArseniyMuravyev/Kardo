import { mainPageSlider } from "../../data";
import { Slider } from "./Slider";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Slider> = {
  title: "ui-kit/Slider",
  component: Slider,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    data: mainPageSlider,
  },
};

export default meta;
