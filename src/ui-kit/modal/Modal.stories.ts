import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "ui-kit/Modal",
  component: Modal,
  tags: ["autodocs"],
};

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {},
};

export default meta;
