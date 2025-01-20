import PresetButton from '@/components/preset-button/preset-button';
import PRESET_BUTTON from '@/constants/preset-buttons';
import { AdmissionPresetType } from '@/constants/preset-buttons';
import useAdmissionQuestionResult from '@/hooks/use-admission-question-result';
import useAdmissionStore from '@/stores/store/admission-store';
import useMessagesStore from '@/stores/store/message-store';
import { AdmissionType } from '@/types/admission-type';
import { ChatSteps } from '@/types/chat';
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

  if (isLoading) return <div>Loading</div>;

  return (
    <div className="mt-2 flex w-full justify-end">
      <div className="flex w-72 flex-wrap justify-end gap-2">
        <PresetButton onClick={() => changeStep('질문 출처 결과')}>🙋‍♂️ 어디에서 볼 수 있나요?</PresetButton>
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
  );
}

export default QuestionResult;
