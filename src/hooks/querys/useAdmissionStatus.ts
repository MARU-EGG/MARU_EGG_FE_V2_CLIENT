import { getAdmissionStatus } from '@/api/api';
import formatAdmissionStatus from '@/utils/format-admission-status';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function useAdmissionStatus() {
  const data = useSuspenseQuery({
    queryKey: ['ADMISSION_STATUS'],
    queryFn: getAdmissionStatus,
    select: (data) => {
      return formatAdmissionStatus(data);
    },
  });

  return data;
}
