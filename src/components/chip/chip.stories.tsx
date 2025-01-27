import Chip from '@/components/chip/chip';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      controle: 'text',
      description: '칩 내부에 들어갈 텍스트',
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '수시 질문중',
  },
};
