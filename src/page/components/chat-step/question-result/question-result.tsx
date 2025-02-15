import ChatLoadingSpinner from '@/components/loading/chat-loading-spinner';
import PresetButton from '@/components/preset-button/preset-button';
import PRESET_BUTTON from '@/constants/preset-buttons';
import { AdmissionPresetType } from '@/constants/preset-buttons';
import useAdmissionQuestionResult from '@/hooks/use-admission-question-result';
import PresetButtons from '@/page/components/preset-buttons/preset-buttons';
import useAdmissionStore from '@/stores/store/admission-store';
import useMessagesStore from '@/stores/store/message-store';
import { AdmissionType } from '@/types/admission-type';
import { ChatSteps } from '@/types/steps';
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

  const handleQuestionSelect = (question: AdmissionPresetType) => {
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

  return <PresetButtons changeStep={changeStep} handleQuestionSelect={handleQuestionSelect} />;
}

export default QuestionResult;
