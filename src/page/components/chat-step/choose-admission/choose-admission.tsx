import PresetButton from '@/components/preset-button/preset-button';
import useAdmissionStore from '@/stores/store/admission-store';
import useMessagesStore from '@/stores/store/message-store';
import { ADDMISSION, AdmissionType } from '@/types/admission-type';
import { ChatSteps } from '@/types/chat';

interface Props {
  changeStep: (step: ChatSteps) => void;
}

function ChooseAdmission({ changeStep }: Props) {
  const admissions: AdmissionType[] = ['SUSI', 'JEONGSI', 'PYEONIP'];
  const { setAdmissionType } = useAdmissionStore();
  const { setMessages } = useMessagesStore();

  const selectAdmission = (admission: AdmissionType) => {
    changeStep('입시유형 상세전형 선택');
    setMessages([{ role: 'user', message: `${ADDMISSION[admission]} 전형이 궁금해요` }]);
    setAdmissionType(admission);
  };

  return (
    <div className="flex flex-col">
      <div className="mt-2 flex w-full flex-col items-end gap-2">
        {admissions.map((admission) => (
          <PresetButton
            key={admission}
            onClick={() => selectAdmission(admission)}
          >{`${ADDMISSION[admission]} 전형이 궁금해요`}</PresetButton>
        ))}
      </div>
    </div>
  );
}

export default ChooseAdmission;
