import Selector from '@/components/selector/selector';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Selector',
  component: Selector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Selector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Selector>
      <Selector.Header>모집요강으로 바로 이동</Selector.Header>
      <Selector.Option onClick={() => alert('Clicked')}>출처 1번(전형 일정)</Selector.Option>
      <Selector.Option onClick={() => alert('Clicked')}>출처 1번(제출 서류)</Selector.Option>
    </Selector>
  ),
};

export const Checkbox: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Selector>
      <Selector.Header>모집요강으로 바로 이동</Selector.Header>
      <Selector.Option style={'checkbox'} onClick={() => alert('Clicked')}>
        인문캠퍼스
      </Selector.Option>
      <Selector.Option style={'checkbox'} onClick={() => alert('Clicked')}>
        자연캠퍼스
      </Selector.Option>
    </Selector>
  ),
};

export const DropDown: Story = {
  args: {
    children: null,
  },
  render: () => (
    <Selector>
      <Selector.Header>모집요강으로 바로 이동</Selector.Header>
      <Selector.Option style={'dropDown'} onClick={() => alert('Clicked')}>
        여기를 눌러주세요
      </Selector.Option>
    </Selector>
  ),
};
