import { useState } from 'react';
import Header from '@/components/header/header';
import Layout from '@/components/layout/layout';
import PresetButton from '@/components/preset-button/preset-button';
import Snackbar from '@/components/snackbar/snackbar';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Components/Snackbar',
  component: Snackbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      description: '스낵바의 열림 상태',
    },
    message: {
      control: 'text',
      description: '스낵바에 들어갈 텍스트 메시지',
    },
    autoHideDuration: {
      control: 'number',
      description: '스낵바가 자동으로 사라지는 시간 ',
    },
    position: {
      control: 'select',
      description: '스낵바가 나타날 위치. top or bottom 만 존재',
    },
    handleClose: {
      description: '스낵바를 닫을 수 있는 함수',
    },
  },
} satisfies Meta<typeof Snackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bottom: Story = {
  args: {
    open: false,
    message: '스낵바 하단 테스트 메시지',
    autoHideDuration: 3000,
    position: 'bottom',
    handleClose: () => {},
  },

  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);

    return (
      <Layout>
        <Header />
        <div className="mt-10 flex justify-center">
          <PresetButton onClick={() => setOpen(true)}>스낵바 열기</PresetButton>
        </div>
        <Snackbar
          open={open}
          message="스낵바 하단 테스트 메시지"
          autoHideDuration={3000}
          handleClose={() => setOpen(false)}
          position="bottom"
        />
      </Layout>
    );
  },
};

export const Top: Story = {
  args: {
    open: false,
    message: '스낵바 상단 테스트 메시지',
    autoHideDuration: 3000,
    position: 'top',
    handleClose: () => {},
  },

  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);

    return (
      <Layout>
        <Header />
        <div className="mt-10 flex justify-center">
          <PresetButton onClick={() => setOpen(true)}>스낵바 열기</PresetButton>
        </div>
        <Snackbar
          open={open}
          message="스낵바 상단 테스트 메시지"
          autoHideDuration={3000}
          handleClose={() => setOpen(false)}
          position="top"
        />
      </Layout>
    );
  },
};
