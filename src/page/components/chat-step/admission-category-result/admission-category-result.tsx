import { AdmissionPresetType } from '@/constants/preset-buttons';
import useAdmissionQuestionResult from '@/hooks/use-admission-question-result';
import PresetButtons from '@/page/components/preset-buttons/preset-buttons';
import useAdmissionStore from '@/stores/store/admission-store';
import useMessagesStore from '@/stores/store/message-store';
import { AdmissionType } from '@/types/admission-type';
import { ChatSteps } from '@/types/steps';

interface Props {
  changeStep: (step: ChatSteps) => void;
  admissionType: AdmissionType;
  admissionCategory: string;
}

function AdmissionCategoryResult({ admissionType, changeStep, admissionCategory }: Props) {
  const { setQuestion } = useAdmissionStore();
  const { isLoading } = useAdmissionQuestionResult({
    admissionType: admissionType,
    category: 'ADMISSION_GUIDELINE',
    question: admissionCategory,
    questionType: 'general',
  });
  const { setMessages } = useMessagesStore();

  const handleQuestionSelect = (question: AdmissionPresetType) => {
    changeStep('상세전형 질문 결과');
    setMessages([{ role: 'user', message: question.label }]);
    setQuestion(question);
  };

  if (!isLoading) return <PresetButtons changeStep={changeStep} handleQuestionSelect={handleQuestionSelect} />;
}

export default AdmissionCategoryResult;
