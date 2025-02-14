export interface ChatMessage {
  role: 'user' | 'system';
  message: string;
  markdown?: boolean;
}
