import { useEffect, useState } from 'react';
import usePostQuestion from '@/hooks/querys/usePostQuestion';
import { AdmissionType } from '@/types/admission-type';
import { PostQuestionResponse } from '@/types/questions';
import makePrompt from '@/utils/make-prompt';

export default function useAdmissionQuestionResult(admissionType: AdmissionType, admissionCategory: string) {
  const [result, setResult] = useState<PostQuestionResponse | null>(null);
  const { questionMutation } = usePostQuestion();

  useEffect(() => {
    if (admissionType && admissionCategory) {
      questionMutation.mutate(
        {
          type: admissionType,
          category: 'ADMISSION_GUIDELINE',
          content: makePrompt(admissionType, admissionCategory),
        },
        {
          onSuccess: (data) => {
            setResult(data);
          },
        },
      );
    }
  }, []);

  return { result, isLoading: questionMutation.isPending };
}
