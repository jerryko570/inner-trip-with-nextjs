import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'UI/Header',
  component: Header,
  argTypes: {
    variant: { control: 'radio', options: ['default'] },
    sticky: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    variant: 'default',
    sticky: false,
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const Sticky: Story = {
  args: {
    variant: 'default',
    sticky: true,
  },
  parameters: {
    layout: 'fullscreen',
  },
};
