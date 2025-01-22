import { ADDMISSION, AdmissionType } from '@/types/admission-type';

export default function makePrompt(admission: AdmissionType, category: string) {
  return `${ADDMISSION[admission]}의 ${category}에 대해 설명해줘 단 아래의 출력 형식을 반드시 따라줘
        **[전형제목]** 
        **[전형방법]**  
        **[지원자격]**  
        **[제출서류]**  
        아래 버튼을 눌러 더 자세한 정보를 확인하거나 직접 질문해보세요!`;
}
