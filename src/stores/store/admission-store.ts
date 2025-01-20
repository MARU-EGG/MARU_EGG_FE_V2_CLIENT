import { AdmissionPresetType } from '@/constants/preset-buttons';
import { AdmissionType } from '@/types/admission-type';
import { create } from 'zustand';

interface AdmissionState {
  admissionType: AdmissionType | null;
  admissionCategory: string | null;
  question: AdmissionPresetType | null;
  setAdmissionType: (type: AdmissionType) => void;
  setAdmissionCategory: (category: string) => void;
  setQuestion: (question: AdmissionPresetType) => void;
}

const useAdmissionStore = create<AdmissionState>((set) => ({
  admissionType: null,
  admissionCategory: null,
  question: null,
  setAdmissionType: (type) => set({ admissionType: type }),
  setAdmissionCategory: (category) => set({ admissionCategory: category }),
  setQuestion: (question) => set({ question: question }),
}));

export default useAdmissionStore;
