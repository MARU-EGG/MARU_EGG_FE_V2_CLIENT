import Markdown from 'react-markdown';
import Chat from '@/components/chat/chat';
import useMessagesStore from '@/stores/store/message-store';

function MessageHistory() {
  const { messages } = useMessagesStore();
  return (
    <div className="flex flex-col gap-2">
      {messages?.map((message, index) =>
        message.markdown ? (
          <Chat key={index} role={message.role}>
            <Markdown>{message.message}</Markdown>
          </Chat>
        ) : (
          <Chat key={index} role={message.role}>
            {message.message}
          </Chat>
        ),
      )}
    </div>
  );
}

export default MessageHistory;
