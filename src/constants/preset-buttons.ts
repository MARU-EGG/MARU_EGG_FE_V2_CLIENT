export interface AdmissionPresetType {
  label: string;
  category: 'ADMISSION_GUIDELINE' | 'PASSING_RESULT';
  question: string | ((type: string) => string);
}

const PRESET_BUTTON: AdmissionPresetType[] = [
  {
    label: '전형일정',
    category: 'ADMISSION_GUIDELINE',
    question: '전형일정',
  },

  {
    label: '제출 서류',
    category: 'ADMISSION_GUIDELINE',
    question: '제출 서류 유의사항',
  },
  {
    label: '입시 결과',
    category: 'PASSING_RESULT',
    question: (type: string) => `${type}의 모든 학과에 대한 입시결과 알려줘`,
  },
  {
    label: '면접 유의사항',
    category: 'ADMISSION_GUIDELINE',
    question: '블라인드 면접 유의사항',
  },
  {
    label: '실기고사',
    category: 'ADMISSION_GUIDELINE',
    question: '실기고사',
  },
] as const;

export default PRESET_BUTTON;
