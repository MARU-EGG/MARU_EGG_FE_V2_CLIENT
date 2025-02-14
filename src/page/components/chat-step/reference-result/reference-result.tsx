import { useEffect } from 'react';
import TextMenu from '@/components/menu-items/text-menu/text-menu';
import MenuList from '@/components/menu-list/menu-list';
import systemMessage from '@/constants/message';
import { AdmissionPresetType } from '@/constants/preset-buttons';
import PresetButtons from '@/page/components/preset-buttons/preset-buttons';
import useAdmissionStore from '@/stores/store/admission-store';
import useMessagesStore from '@/stores/store/message-store';
import useQuestionReferencesStore from '@/stores/store/question-references-store';
import { ChatSteps } from '@/types/steps';
import { apiEventGATrigger } from '@/utils/ga-trigger';

interface ReferenceResultProps {
  changeStep: (step: ChatSteps) => void;
}

function ReferenceResult({ changeStep }: ReferenceResultProps) {
  const { references } = useQuestionReferencesStore();
  const { setMessages } = useMessagesStore();
  const { setQuestion } = useAdmissionStore();

  const handleQuestionSelect = (question: AdmissionPresetType) => {
    changeStep('상세전형 질문 결과');
    setMessages([
      {
        role: 'user',
        message: question.label,
      },
    ]);
    setQuestion(question);
  };

  const handleReferenceClick = (link: string) => {
    window.open(link);
    apiEventGATrigger({
      category: 'reference check',
      action: 'click',
      label: '출처 pdf 클릭하기',
      value: 1,
    });
  };

  useEffect(() => {
    setMessages([
      { role: 'system', message: references ? systemMessage.referenceGuide : systemMessage.noReferenceGuide },
    ]);
  }, []);

  return (
    <>
      <div className="mt-2">
        {references && (
          <MenuList>
            <MenuList.Title title="모집요강으로 이동" />
            {references.map((reference) => (
              <TextMenu
                key={reference.link}
                label={reference.title}
                onClick={() => {
                  handleReferenceClick(reference.link);
                }}
              />
            ))}
          </MenuList>
        )}
      </div>
      <PresetButtons changeStep={changeStep} handleQuestionSelect={handleQuestionSelect} showReferenceButton={false} />
    </>
  );
}

export default ReferenceResult;
