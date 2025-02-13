import ChatLoadingSpinner from '@/components/loading/chat-loading-spinner';
import PresetButton from '@/components/preset-button/preset-button';
import PRESET_BUTTON from '@/constants/preset-buttons';
import { AdmissionPresetType } from '@/constants/preset-buttons';
import useAdmissionQuestionResult from '@/hooks/use-admission-question-result';
import useAdmissionStore from '@/stores/store/admission-store';
import useMessagesStore from '@/stores/store/message-store';
import { AdmissionType } from '@/types/admission-type';
import { ChatSteps } from '@/types/chat';
import { apiEventGATrigger } from '@/utils/ga-trigger';
import getQuestionPrompt from '@/utils/get-question-prompt';

interface QuestionResultProps {
  admissionType: AdmissionType;
  admissionCategory: string;
  question: AdmissionPresetType;
  changeStep: (step: ChatSteps) => void;
}

function QuestionResult({ admissionType, admissionCategory, question, changeStep }: QuestionResultProps) {
  const { setQuestion } = useAdmissionStore();
  const { setMessages } = useMessagesStore();
  const questionContent = getQuestionPrompt(question.question, admissionCategory);

  const { refetch, isLoading } = useAdmissionQuestionResult({
    admissionType: admissionType,
    category: question.category,
    question: questionContent,
    questionType: 'detail',
  });

  const selectQuestion = (question: AdmissionPresetType) => {
    refetch();
    setMessages([
      {
        role: 'user',
        message: question.label,
      },
    ]);
    setQuestion(question);
  };

  if (isLoading) return <ChatLoadingSpinner />;

  return (
    <div className="mt-2 flex w-full justify-end">
      <div className="flex w-72 flex-wrap justify-end gap-2">
        <PresetButton
          onClick={() => {
            changeStep('질문 출처 결과');
            setMessages([{ role: 'user', message: '🙋‍♂️ 어디에서 볼 수 있나요?' }]);
            apiEventGATrigger({ category: 'preset button click', action: 'click', label: '출처확인하기', value: 1 });
          }}
        >
          🙋‍♂️ 어디에서 볼 수 있나요?
        </PresetButton>
        {PRESET_BUTTON.map((question) => (
          <PresetButton
            onClick={() => {
              selectQuestion(question);
              apiEventGATrigger({
                category: 'preset button click',
                action: 'click',
                label: `${question}질문`,
                value: 1,
              });
            }}
            key={question.label}
          >
            {question.label}
          </PresetButton>
        ))}
        <PresetButton
          onClick={() => {
            window.location.reload();
            apiEventGATrigger({ category: 'preset button click', action: 'click', label: '조건재설정', value: 1 });
          }}
        >
          조건 재설정
        </PresetButton>
      </div>
    </div>
  );
}

export default QuestionResult;
