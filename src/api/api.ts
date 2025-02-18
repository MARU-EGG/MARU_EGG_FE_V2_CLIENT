import { server_axiosInstance } from '@/api';
import { AdmissionType, isActiveAdmissionType, ResponseDetailAdmissionType } from '@/types/admission-type';
import { ResponseCollegeType, ResponseDepartmentType } from '@/types/department';
import { DefaultPostQuestionParams, PostQuestionResponse } from '@/types/questions';

export const getAdmissionDetail = async (type: AdmissionType): Promise<ResponseDetailAdmissionType[]> => {
  const response = await server_axiosInstance.get(`/api/admissions/details/${type}`);
  return response.data;
};

export const getAdmissionStatus = async (): Promise<isActiveAdmissionType[]> => {
  const response = await server_axiosInstance.get(`/api/admissions/status`);
  return response.data;
};

export const getCollege = async (college: '인문캠퍼스' | '자연캠퍼스'): Promise<ResponseCollegeType[]> => {
  const response = await server_axiosInstance.get(`api/campuses/colleges/campus/${college}`);
  return response.data;
};

export const getDepartment = async (collegeId: number): Promise<ResponseDepartmentType[]> => {
  const response = await server_axiosInstance.get(`api/campuses/departments/college/${collegeId}`);
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
