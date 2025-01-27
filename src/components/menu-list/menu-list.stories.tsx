import Checkbox from '@/components/menu-items/check-box/check-box';
import DropdownMenu from '@/components/menu-items/dropdown-menu/dropdown-menu';
import TextMenu from '@/components/menu-items/text-menu/text-menu';
import MenuList from '@/components/menu-list/menu-list';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/MenuList',
  component: MenuList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MenuList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: null,
  },
  render: () => (
    <MenuList>
      <MenuList.Title title="모집요강으로 이동" />
      <TextMenu label="출처보러 가기" />
      <TextMenu label="출처보러 가기" />
      <TextMenu label="출처보러 가기" />
    </MenuList>
  ),
};

export const CheckboxMenu: Story = {
  args: {
    children: null,
  },
  render: () => (
    <MenuList>
      <MenuList.Title title="캠퍼스를 선택해주세요" />
      <Checkbox label="인문캠퍼스" />
      <Checkbox label="자연캠퍼스" />
    </MenuList>
  ),
};

export const DropDown: Story = {
  args: {
    children: null,
  },
  render: () => (
    <MenuList>
      <MenuList.Title title="학과(부)를 선택해주세요" />
      <DropdownMenu label="여기를 눌러주세요" />
    </MenuList>
  ),
};
