import ChatLoadingAnimation from '@/assets/lottie/chat-loading.json';
import Chat from '@/components/chat/chat';
import Lottie from 'lottie-react';

function ChatLoadingSpinner() {
  return (
    <Chat role="system">
      <Lottie animationData={ChatLoadingAnimation} data="채팅"></Lottie>
    </Chat>
  );
}

export default ChatLoadingSpinner;
