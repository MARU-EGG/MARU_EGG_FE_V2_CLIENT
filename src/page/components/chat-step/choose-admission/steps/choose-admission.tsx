import PresetButton from '@/components/preset-button/preset-button';
import Snackbar from '@/components/snackbar/snackbar';
import useAdmissionStatus from '@/hooks/querys/useAdmissionStatus';
import useAdmissionStatusMessage from '@/hooks/use-admission-status-message';
import useAdmissionStore from '@/stores/store/admission-store';
import useMessagesStore from '@/stores/store/message-store';
import { ADDMISSION, AdmissionType } from '@/types/admission-type';
import { AdmissionSelectionSteps } from '@/types/steps';
import { apiEventGATrigger } from '@/utils/ga-trigger';

interface Props {
  changeAdmissionStep: (step: AdmissionSelectionSteps) => void;
}

function ChooseAdmission({ changeAdmissionStep }: Props) {
  const admissions: AdmissionType[] = ['SUSI', 'JEONGSI', 'PYEONIP'];
  const { data: admissionStatus } = useAdmissionStatus();
  const { setAdmissionType } = useAdmissionStore();
  const { message, openSnackbar, closeSnackbar } = useAdmissionStatusMessage(admissionStatus);

  const { setMessages } = useMessagesStore();

  const selectAdmission = (admission: AdmissionType) => {
    changeAdmissionStep('소전형 선택 단계');
    setMessages([{ role: 'user', message: `${ADDMISSION[admission]} 전형이 궁금해요` }]);
    setAdmissionType(admission);
    apiEventGATrigger({
      category: 'admission type select',
      action: 'click',
      label: `${admission}`,
      value: 1,
    });
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="mt-2 flex w-full flex-col items-end gap-2">
          {admissions.map((admission) => (
            <PresetButton
              key={admission}
              onClick={() => selectAdmission(admission)}
              disabled={!admissionStatus[admission]}
            >{`${ADDMISSION[admission]} 전형이 궁금해요`}</PresetButton>
          ))}
        </div>
      </div>
      <Snackbar
        open={openSnackbar}
        handleClose={closeSnackbar}
        message={message}
        position="top"
        autoHideDuration={3000}
      />
    </>
  );
}

export default ChooseAdmission;
