import { useState } from 'react';
import BottomSheet from '@/components/bottom-sheet/bottom-sheet';
import Header from '@/components/header/header';
import Layout from '@/components/layout/layout';
import DropdownMenu from '@/components/menu-items/dropdown-menu/dropdown-menu';
import MenuList from '@/components/menu-list/menu-list';
import type { Meta, StoryObj } from '@storybook/react';

const menu = [
  '행정학과',
  '경제학과',
  '경영학과',
  '국제통상학과',
  '법학과',
  '심리학과',
  '컴퓨터공학과',
  '사회복지학과',
  '미디어커뮤니케이션학과',
  '통계학과',
];

const meta = {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: false,
    onClose: () => {},
    children: null,
  },
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Layout>
        <Header />
        <div className="flex justify-center">
          <MenuList>
            <MenuList.Title title="학과(부)를 선택해주세요"></MenuList.Title>
            <DropdownMenu label="여기를 눌러주세요" onClick={() => setIsOpen(true)} />
          </MenuList>
        </div>

        <BottomSheet open={isOpen} onClose={() => setIsOpen(false)}>
          <span className="text-xs text-gray-500">학과(부)를 선택해주세요</span>
          {menu.map((menu) => (
            <div className="py-2">{menu}</div>
          ))}
        </BottomSheet>
      </Layout>
    );
  },
};
