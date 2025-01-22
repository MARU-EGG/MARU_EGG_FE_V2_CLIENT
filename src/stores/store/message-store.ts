import systemMessage from '@/constants/message';
import { create } from 'zustand';
import { ChatMessage } from './../../types/chat';

interface MessageState {
  messages: ChatMessage[];
  setMessages: (messages: ChatMessage[]) => void;
}

const useMessagesStore = create<MessageState>((set) => ({
  messages: [{ role: 'system', message: systemMessage.introduction }],
  setMessages: (messages) =>
    set((state) => ({
      messages: [...state.messages, ...messages],
    })),
}));

export default useMessagesStore;
