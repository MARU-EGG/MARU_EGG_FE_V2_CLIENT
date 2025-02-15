import { getCollege } from '@/api/api';
import { useSuspenseQuery } from '@tanstack/react-query';

export default function useCollege(campus: '인문캠퍼스' | '자연캠퍼스') {
  const { data } = useSuspenseQuery({
    queryKey: [campus],
    queryFn: () => getCollege(campus),
  });

  return data;
}
