import { getAdmissionDetail } from '@/api/api';
import { AdmissionType } from '@/types/admission-type';
import formatAdmissionDetail from '@/utils/format-admission-detail';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function useAdmissionDetail(admissionType: AdmissionType | null) {
  const { data } = useSuspenseQuery({
    queryKey: [admissionType, 'admission'],
    queryFn: async () => {
      if (!admissionType) {
        throw new Error('Admission type is required');
      }
      return getAdmissionDetail(admissionType);
    },
    select: (data) => formatAdmissionDetail(data),
  });

  return data;
}
