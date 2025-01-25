import { useEffect } from 'react';
import CheckBox from '@/components/menu-items/check-box/check-box';
import MenuList from '@/components/menu-list/menu-list';
import systemMessage from '@/constants/message';
import useMessagesStore from '@/stores/store/message-store';

function ChooseDepartment() {
  const { setMessages } = useMessagesStore();

  useEffect(() => {
    setMessages([{ role: 'system', message: systemMessage.campusGuide }]);
  }, []);

  return (
    <MenuList>
      <MenuList.Title title="캠퍼스를 선택해주세요"></MenuList.Title>
      <CheckBox label="인문캠퍼스"></CheckBox>
      <CheckBox label="자연캠퍼스"></CheckBox>
    </MenuList>
  );
}

export default ChooseDepartment;
