import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  argTypes: {
    children: { control: "text", defaultValue: "버튼" },
    variant: { control: "radio", options: ["primary", "outline", "disabled"] },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "버튼",
    variant: "primary",
  },
  parameters: {
    layout: "centered",
  },
};
