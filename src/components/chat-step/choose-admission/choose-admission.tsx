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

  const handleClick = (admission: AdmissionType) => {
    changeStep('choose_admission_category');
    setMessages([{ role: 'user', message: `${ADDMISSION[admission]} 전형이 궁금해요` }]);
    setAdmissionType(admission);
  };

  return (
    <div className="flex flex-col">
      <div className="mt-2 flex w-full flex-col items-end gap-2">
        {admissions.map((admission) => (
          <PresetButton
            key={admission}
            onClick={() => handleClick(admission)}
          >{`${ADDMISSION[admission]} 전형이 궁금해요`}</PresetButton>
        ))}
      </div>
    </div>
  );
}

export default ChooseAdmission;
