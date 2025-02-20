import ChatLoadingAnimation from '@/assets/lottie/chat-loading.json';
import { MaruIcon } from '@/assets/svg';
import Lottie from 'lottie-react';

function ChatLoadingSpinner() {
  return (
    <div className="relative flex">
      <MaruIcon className="absolute -left-9 top-6" />
      <div className="flex flex-col gap-1">
        <div className="px-3 text-xs text-gray-500">마루에그</div>
        <Lottie animationData={ChatLoadingAnimation} data="채팅" />
      </div>
    </div>
  );
}

export default ChatLoadingSpinner;
