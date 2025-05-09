import DraggableScroller from '@/components/drggable-scroller/draggable-scroller';
import TextMenu from '@/components/menu-items/text-menu/text-menu';
import MenuList from '@/components/menu-list/menu-list';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/DraggableScroller',
  component: DraggableScroller,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof DraggableScroller>;

export default meta;
type Story = StoryObj<typeof DraggableScroller>;

const mockData = [
  {
    label: '수시',
    children: ['학생부교과', '학생부종합', '지역인재', '실기/실적'],
  },
  {
    label: '정시',
    children: ['수능위주', '실기/실적'],
  },
  {
    label: '편입',
    children: ['일반편입', '학사편입', '재외국민편입'],
  },
];

export const Default: Story = {
  render: () => (
    <div className="w-96">
      <DraggableScroller>
        <div className="flex h-40 min-w-56 items-center justify-center bg-gray-200">첫 번째 항목</div>
        <div className="flex h-40 min-w-56 items-center justify-center bg-blue-200">두 번째 항목</div>
        <div className="flex h-40 min-w-56 items-center justify-center bg-green-200">세 번째 항목</div>
      </DraggableScroller>
    </div>
  ),
};

export const WithMenus: Story = {
  render: () => (
    <div className="w-96">
      <DraggableScroller>
        {mockData.map((option) => (
          <MenuList key={option.label}>
            <MenuList.Title title={`${option.label}전형`} />
            {option.children.map((menu) => (
              <TextMenu label={menu} key={menu} />
            ))}
          </MenuList>
        ))}
      </DraggableScroller>
    </div>
  ),
};
