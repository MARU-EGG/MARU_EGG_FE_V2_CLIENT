import { AdmissionType } from '@/types/admission-type';

export type QuestionCategory = 'ADMISSION_GUIDELINE' | 'PASSING_RESULT' | 'PAST_QUESTIONS' | 'INTERVIEW_PRACTICAL_TEST';

export interface DefaultPostQuestionParams {
  type: AdmissionType;
  category: QuestionCategory;
  content: string;
}

export interface RequestAutoComplete extends DefaultPostQuestionParams {
  size: number;
  cursorViewCount: number;
  questionId: number;
}

export interface ResponseAutoComplete {
  content: string;
  id: number;
  isChecked: boolean;
}

export interface PostQuestionResponse {
  id: number;
  content: string;
  dateInformation: string;
  answer: { id: number; content: string; renewalYear: number; dateInformation: string };
  references: QuestionReferences[];
}

export interface QuestionReferences {
  title: string;
  link: string;
}
