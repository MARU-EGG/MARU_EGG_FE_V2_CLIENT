import { postQuestion } from '@/api/api';
import { DefaultPostQuestionParams } from '@/types/questions';
import { useMutation } from '@tanstack/react-query';

export default function usePostQuestion() {
  const questionMutation = useMutation({
    mutationFn: (params: DefaultPostQuestionParams) => postQuestion(params),
    mutationKey: ['POST_QUESTION'],
  });
  return { questionMutation };
}
