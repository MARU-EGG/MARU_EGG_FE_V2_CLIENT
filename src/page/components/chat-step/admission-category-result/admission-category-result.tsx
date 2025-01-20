import PresetButton from '@/components/preset-button/preset-button';
import PRESET_BUTTON, { AdmissionPresetType } from '@/constants/preset-buttons';
import useAdmissionQuestionResult from '@/hooks/use-admission-question-result';
import useAdmissionStore from '@/stores/store/admission-store';
import useMessagesStore from '@/stores/store/message-store';
import { AdmissionType } from '@/types/admission-type';
import { ChatSteps } from '@/types/chat';

interface Props {
  changeStep: (step: ChatSteps) => void;
  admissionType: AdmissionType;
  admissionCategory: string;
}

function AdmissionCategoryResult({ admissionType, changeStep, admissionCategory }: Props) {
  const { setQuestion } = useAdmissionStore();
  const { result, isLoading } = useAdmissionQuestionResult({
    admissionType: admissionType,
    category: 'ADMISSION_GUIDELINE',
    question: admissionCategory,
    questionType: 'general',
  });
  const { setMessages } = useMessagesStore();

  const selectQuestion = (question: AdmissionPresetType) => {
    changeStep('상세전형 질문 결과');
    setMessages([{ role: 'user', message: question.label }]);
    setQuestion(question);
  };

  if (!isLoading && result)
    return (
      <div>
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
            <PresetButton>조건 재설정</PresetButton>
          </div>
        </div>
      </div>
    );
}

export default AdmissionCategoryResult;
