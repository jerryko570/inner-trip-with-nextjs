import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  argTypes: {
    status: { control: "radio", options: ["default", "error", "disabled"] },
    placeholder: { control: "text", defaultValue: "검색어를 입력하세요" },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    status: "error",
    placeholder: "검색어를 입력하세요",
  },
  parameters: {
    layout: "centered",
  },
};
