import Chat from '@/components/chat/chat';
import PresetButton from '@/components/preset-button/preset-button';
import Selector from '@/components/selector/selector';
import systemMessage from '@/constants/message';
import PRESET_BUTTON from '@/constants/preset-buttons';
import { AdmissionPresetType } from '@/constants/preset-buttons';
import useAdmissionStore from '@/stores/store/admission-store';
import useMessagesStore from '@/stores/store/message-store';
import useQuestionReferencesStore from '@/stores/store/question-references-store';
import { ChatSteps } from '@/types/chat';

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

  return (
    <>
      <Chat role="system">{systemMessage.referenceGuide}</Chat>
      <Selector>
        <Selector.Header>모집요강으로 이동</Selector.Header>
        {references.map((reference) => (
          <Selector.Option onClick={() => window.open(reference.link)}>{reference.title}</Selector.Option>
        ))}
      </Selector>
      <div className="mt-2 flex w-full justify-end">
        <div className="flex w-72 flex-wrap justify-end gap-2">
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
          <PresetButton onClick={() => window.location.reload()}>조건 재설정</PresetButton>
        </div>
      </div>
    </>
  );
}

export default ReferenceResult;
