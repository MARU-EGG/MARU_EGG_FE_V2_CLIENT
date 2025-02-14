import PresetButton from '@/components/preset-button/preset-button';
import PRESET_BUTTON, { AdmissionPresetType } from '@/constants/preset-buttons';
import useMessagesStore from '@/stores/store/message-store';
import { ChatSteps } from '@/types/steps';
import { apiEventGATrigger } from '@/utils/ga-trigger';

interface PresetButtonsProps {
  changeStep: (step: ChatSteps) => void;
  handleQuestionSelect: (question: AdmissionPresetType) => void;
}

function PresetButtons({ changeStep, handleQuestionSelect }: PresetButtonsProps) {
  const { setMessages } = useMessagesStore();

  const handleReferenceButtonClick = () => {
    changeStep('질문 출처 결과');
    setMessages([{ role: 'user', message: '🙋‍♂️ 어디에서 볼 수 있나요?' }]);
    apiEventGATrigger({
      category: 'first preset button click',
      action: 'click',
      label: '첫 질문의 출처확인하기',
      value: 1,
    });
  };

  const handleDepartmentButtonClick = () => {
    changeStep('상세전형 학과별 입시');
    setMessages([{ role: 'user', message: '학과별 입시' }]);
    apiEventGATrigger({
      category: 'first preset button click',
      action: 'click',
      label: `학과별 입시결과 확인`,
      value: 1,
    });
  };

  const handleReloadButtonClick = () => {
    window.location.reload();
    apiEventGATrigger({
      category: 'first preset button click',
      action: 'click',
      label: `조건 재설정`,
      value: 1,
    });
  };

  return (
    <div>
      <div className="mt-2 flex w-full justify-end">
        <div className="flex w-72 flex-wrap justify-end gap-2">
          <PresetButton onClick={handleReferenceButtonClick}>🙋‍♂️ 어디에서 볼 수 있나요?</PresetButton>
          {PRESET_BUTTON.map((question) => (
            <PresetButton
              onClick={() => {
                handleQuestionSelect(question);
                apiEventGATrigger({
                  category: 'first preset button click',
                  action: 'click',
                  label: `첫 질문의 ${question}질문`,
                  value: 1,
                });
              }}
              key={question.label}
            >
              {question.label}
            </PresetButton>
          ))}
          <PresetButton onClick={handleDepartmentButtonClick}>학과별 입시</PresetButton>
          <PresetButton onClick={handleReloadButtonClick}>조건 재설정</PresetButton>
        </div>
      </div>
    </div>
  );
}

export default PresetButtons;
