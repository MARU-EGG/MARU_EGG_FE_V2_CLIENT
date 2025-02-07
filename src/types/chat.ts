export type ChatSteps =
  | '입시유형 선택'
  | '입시유형 상세전형 선택'
  | '상세전형 선택 결과'
  | '상세전형 질문 결과'
  | '질문 출처 결과'
  | '상세전형 학과별 입시';

export interface ChatMessage {
  role: 'user' | 'system';
  message: string;
  markdown?: boolean;
}
