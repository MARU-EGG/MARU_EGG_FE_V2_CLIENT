import { AdmissionType, isActiveAdmissionType } from '@/types/admission-type';

function formatAdmissionStatus(data: isActiveAdmissionType[]) {
  const statusObject: Record<AdmissionType, boolean> = {
    SUSI: false,
    JEONGSI: false,
    PYEONIP: false,
  };
  for (const status of data) {
    statusObject[status.type] = status.isActivated;
  }

  return statusObject;
}

export default formatAdmissionStatus;
