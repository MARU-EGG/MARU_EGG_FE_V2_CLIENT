export const ADDMISSION = {
  SUSI: '수시',
  JEONGSI: '정시',
  PYEONIP: '편입',
} as const;

export type AdmissionType = keyof typeof ADDMISSION;
export type AdmissonValue = (typeof ADDMISSION)[AdmissionType];

export interface ResponseDetailAdmissionType {
  id: number;
  name: string;
  type: AdmissionType;
}

export interface isActiveAdmissionType {
  admissionType: AdmissionType;
  isActivated: boolean;
}
