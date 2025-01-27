import { useEffect } from 'react';
import TextMenu from '@/components/menu-items/text-menu/text-menu';
import MenuList from '@/components/menu-list/menu-list';
import PresetButton from '@/components/preset-button/preset-button';
import systemMessage from '@/constants/message';
import PRESET_BUTTON from '@/constants/preset-buttons';
import { AdmissionPresetType } from '@/constants/preset-buttons';
import useAdmissionStore from '@/stores/store/admission-store';
import useMessagesStore from '@/stores/store/message-store';
import useQuestionReferencesStore from '@/stores/store/question-references-store';
import { ChatSteps } from '@/types/chat';
import { apiEventGATrigger } from '@/utils/ga-trigger';

interface ReferenceResultProps {
  changeStep: (step: ChatSteps) => void;
}

function ReferenceResult({ changeStep }: ReferenceResultProps) {
  const { references } = useQuestionReferencesStore();
  const { setMessages } = useMessagesStore();
  const { setQuestion } = useAdmissionStore();

  const selectQuestion = (question: AdmissionPresetType) => {
    changeStep('상세전형 질문 결과');
    setMessages([
      {
        role: 'user',
        message: question.label,
      },
    ]);
    setQuestion(question);
  };

  useEffect(() => {
    setMessages([{ role: 'system', message: systemMessage.referenceGuide }]);
  }, []);

  return (
    <>
      <MenuList>
        <MenuList.Title title="모집요강으로 이동" />
        {references.map((reference) => (
          <TextMenu 
            key={reference.link} 
            label={reference.title} 
            onClick={() => {
              window.open(reference.link);
              apiEventGATrigger({
                category: 'reference check',
                action: 'click',
                label: '출처 pdf 클릭하기',
                value: 1,
              });
            }} />
        ))}
      </MenuList>
      <div className="mt-2 flex w-full justify-end">
        <div className="flex w-72 flex-wrap justify-end gap-2">
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
              apiEventGATrigger({
                category: 'reference check',
                action: 'click',
                label: '출처 pdf 클릭하기',
                value: 1,
              });
            }}
          >
            조건 재설정
          </PresetButton>
        </div>
      </div>
    </>
  );
}

export default ReferenceResult;
