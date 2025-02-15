import { useEffect } from 'react';
import Checkbox from '@/components/menu-items/check-box/check-box';
import MenuList from '@/components/menu-list/menu-list';
import systemMessage from '@/constants/message';
import useMessagesStore from '@/stores/store/message-store';
import { DepartmentSteps } from '@/types/steps';

interface ChooseCampusProps {
  changeDepartMentStep: (step: DepartmentSteps) => void;
  setCampus: (campus: '인문캠퍼스' | '자연캠퍼스') => void;
}

function ChooseCampus({ changeDepartMentStep, setCampus }: ChooseCampusProps) {
  const { setMessages } = useMessagesStore();

  useEffect(() => {
    setMessages([{ role: 'system', message: systemMessage.campusGuide }]);
  }, []);

  const handleClick = (campus: '인문캠퍼스' | '자연캠퍼스') => {
    changeDepartMentStep('단과대 선택');
    setCampus(campus);
    setMessages([{ role: 'user', message: campus }]);
  };

  return (
    <div className="mt-3">
      <MenuList>
        <MenuList.Title title="캠퍼스를 선택해주세요"></MenuList.Title>
        <Checkbox label="인문캠퍼스" onClick={() => handleClick('인문캠퍼스')} />
        <Checkbox label="자연캠퍼스" onClick={() => handleClick('자연캠퍼스')} />
      </MenuList>
    </div>
  );
}

export default ChooseCampus;
