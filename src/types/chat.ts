export type ChatSteps =
  | 'choose_admission'
  | 'choose_admission_category'
  | 'admission_category_result'
  | 'choose_detail';

export interface ChatMessage {
  role: 'user' | 'system';
  message: string;
}
