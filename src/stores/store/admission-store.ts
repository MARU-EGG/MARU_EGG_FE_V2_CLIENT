import { AdmissionType } from '@/types/admission-type';
import { create } from 'zustand';

interface AdmissionState {
  admissionType: AdmissionType | null;
  admissionCategory: string | null;
  setAdmissionType: (type: AdmissionType | null) => void;
  setAdmissionCategory: (category: string | null) => void;
}

const useAdmissionStore = create<AdmissionState>((set) => ({
  admissionType: null,
  admissionCategory: null,

  setAdmissionType: (type) => set({ admissionType: type }),
  setAdmissionCategory: (category) => set({ admissionCategory: category }),
}));

export default useAdmissionStore;
