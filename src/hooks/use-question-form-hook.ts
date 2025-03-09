import { useState } from 'react';
import useAdmissionStore from '@/stores/store/admission-store';
import useMessagesStore from '@/stores/store/message-store';
import { ChatSteps } from '@/types/steps';
import { apiEventGATrigger } from '@/utils/ga-trigger';
import { useIsMutating } from '@tanstack/react-query';

interface UseQuestionFormProps {
  changeStep: (step: ChatSteps) => void;
}

export function useQuestionForm({ changeStep }: UseQuestionFormProps) {
  const [content, setContent] = useState<string>('');
  const { setQuestion } = useAdmissionStore();
  const { setMessages } = useMessagesStore();
  const isMutating = useIsMutating({ mutationKey: ['POST_QUESTION'] });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!content.trim()) return;
    setQuestion({
      label: content,
      category: 'ADMISSION_GUIDELINE',
      question: content,
    });
    setMessages([
      {
        role: 'user',
        message: content.trim(),
      },
    ]);
    changeStep('질문 결과 확인 단계');
    setContent('');
    apiEventGATrigger({
      category: 'form submit',
      action: 'submit',
      label: '대화형 질문',
      value: 1,
    });
  };

  return { content, setContent, isLoading: isMutating === 1, handleSubmit };
}
