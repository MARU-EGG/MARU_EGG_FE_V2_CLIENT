import { server_axiosInstance } from '@/api';
import { AdmissionType, ResponseDetailAdmissionType } from '@/types/admission-type';
import { DefaultPostQuestionParams, PostQuestionResponse } from '@/types/questions';

export const getAdmissionDetail = async (type: AdmissionType): Promise<ResponseDetailAdmissionType[]> => {
  const response = await server_axiosInstance.get(`/api/admissions/details/${type}`);
  return response.data;
};

export const postQuestion = async ({
  category,
  type,
  content,
}: DefaultPostQuestionParams): Promise<PostQuestionResponse> => {
  const response = await server_axiosInstance.post('/api/questions', JSON.stringify({ category, type, content }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};
