import type { Meta, StoryObj } from "@storybook/react";
import PasswordInput from "./PasswordInput";

const meta: Meta<typeof PasswordInput> = {
  title: "UI/PasswordInput",
  component: PasswordInput,
  argTypes: {
    status: { control: "radio", options: ["default", "error"] },
    placeholder: { control: "text", defaultValue: "비밀번호를 입력하세요" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  args: {
    status: "default",
    placeholder: "비밀번호를 입력하세요",
  },
  parameters: {
    layout: "centered",
  },
};
