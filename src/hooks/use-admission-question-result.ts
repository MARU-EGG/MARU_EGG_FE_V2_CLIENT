import { useEffect, useState } from 'react';
import usePostQuestion from '@/hooks/querys/usePostQuestion';
import useMessagesStore from '@/stores/store/message-store';
import useQuestionReferencesStore from '@/stores/store/question-references-store';
import { AdmissionType } from '@/types/admission-type';
import { PostQuestionResponse } from '@/types/questions';
import makePrompt from '@/utils/make-prompt';
import { useQueryClient } from '@tanstack/react-query';

interface UseAdmissionType {
  admissionType: AdmissionType;
  category: 'ADMISSION_GUIDELINE' | 'PASSING_RESULT';
  question: string;
  questionType: 'general' | 'detail';
}

export default function useAdmissionQuestionResult({
  admissionType,
  category,
  question,
  questionType,
}: UseAdmissionType) {
  const [result, setResult] = useState<PostQuestionResponse | null>(null);
  const [timestamp, setTimestamp] = useState(Date.now());
  const { questionMutation } = usePostQuestion();
  const { setMessages } = useMessagesStore();
  const { setReferences } = useQuestionReferencesStore();
  const queryClient = useQueryClient();

  const checkAndSetCacheData = (QUERY_KEY: unknown[]) => {
    const cachedData = queryClient.getQueryData<string>(QUERY_KEY);
    if (cachedData) {
      setMessages([
        {
          role: 'system',
          message: cachedData,
          markdown: true,
        },
      ]);
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (!admissionType || !question) return;

    const QUERY_KEY = [admissionType, category, question, questionType];
    if (checkAndSetCacheData(QUERY_KEY)) return;

    const content = questionType === 'general' ? makePrompt(admissionType, question) : question;

    questionMutation.mutate(
      {
        type: admissionType,
        category: category,
        content: content,
      },
      {
        onSuccess: (data) => {
          setResult(data);
          setMessages([
            {
              role: 'system',
              message: data.answer.content,
              markdown: true,
            },
          ]);
          setReferences(data.references);
          queryClient.setQueryData(QUERY_KEY, data.answer.content);
        },
      },
    );
  }, [question, timestamp]);

  const refetch = () => {
    setTimestamp(Date.now());
  };

  return { result, isLoading: questionMutation.isPending, refetch };
}
