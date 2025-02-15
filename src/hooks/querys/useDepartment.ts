import { getDepartment } from '@/api/api';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function useDepartment(collegeId: number) {
  const { data } = useSuspenseQuery({
    queryKey: [collegeId, 'COLLEGE_ID'],
    queryFn: () => getDepartment(collegeId),
  });

  return data;
}
