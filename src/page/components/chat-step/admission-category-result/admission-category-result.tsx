import ResultMessage from '@/components/chat-step/admission-category-result/result-message';
import PresetButton from '@/components/preset-button/preset-button';
import PRESET_BUTTON from '@/constants/preset-buttons';
import useAdmissionQuestionResult from '@/hooks/use-admission-question-result';
import useAdmissionStore from '@/stores/store/admission-store';
import useMessagesStore from '@/stores/store/message-store';
import { ChatSteps } from '@/types/chat';

interface Props {
  changeStep: (step: ChatSteps) => void;
}

function AdmissionCategoryResult({ changeStep }: Props) {
  const { admissionType, admissionCategory, setQuestion } = useAdmissionStore();
  const { result, isLoading } = useAdmissionQuestionResult(admissionType!, admissionCategory!);
  const { setMessages } = useMessagesStore();

  const selectQuestion = (question: { label: string; category: string }) => {
    if (result) {
      changeStep('question_result');
      setMessages([
        { role: 'system', message: result.answer.content, markdown: true },
        { role: 'user', message: question.label },
      ]);
      setQuestion(question);
    }
  };

  if (!isLoading && result)
    return (
      <div>
        <ResultMessage result={result} />
        <div className="mt-2 flex w-full justify-end">
          <div className="flex w-56 flex-wrap justify-end gap-2">
            {PRESET_BUTTON.map((question) => (
              <PresetButton
                onClick={() => {
                  selectQuestion(question);
                }}
                key={question.label}
              >
                {question.label}
              </PresetButton>
            ))}
          </div>
        </div>
      </div>
    );
}

export default AdmissionCategoryResult;
