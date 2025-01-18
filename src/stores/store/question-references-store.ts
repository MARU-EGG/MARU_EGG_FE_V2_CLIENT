import { QuestionReferences } from '@/types/questions';
import { create } from 'zustand';

interface ReferencesStat {
  references: QuestionReferences[];
  setReferences: (references: QuestionReferences[]) => void;
}

const useQuestionReferencesStore = create<ReferencesStat>((set) => ({
  references: [],
  setReferences: (references) => set({ references }),
}));

export default useQuestionReferencesStore;
