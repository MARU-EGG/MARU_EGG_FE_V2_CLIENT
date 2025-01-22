import { useEffect } from 'react';
import Selector from '@/components/selector/selector';
import systemMessage from '@/constants/message';
import useMessagesStore from '@/stores/store/message-store';

function ChooseDepartment() {
  const { setMessages } = useMessagesStore();

  useEffect(() => {
    setMessages([{ role: 'system', message: systemMessage.campusGuide }]);
  }, []);

  return (
    <Selector>
      <Selector.Header>캠퍼스를 선택해주세요</Selector.Header>
      <Selector.Option style="checkbox" onClick={() => alert('개발중!')}>
        인문캠퍼스
      </Selector.Option>
      <Selector.Option style="checkbox" onClick={() => alert('개발중!')}>
        자연캠퍼스
      </Selector.Option>
    </Selector>
  );
}

export default ChooseDepartment;
