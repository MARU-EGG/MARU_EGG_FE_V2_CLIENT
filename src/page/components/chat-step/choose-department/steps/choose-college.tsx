import { useEffect } from 'react';
import Checkbox from '@/components/menu-items/check-box/check-box';
import MenuList from '@/components/menu-list/menu-list';
import systemMessage from '@/constants/message';
import useCollege from '@/hooks/querys/useCollege';
import useMessagesStore from '@/stores/store/message-store';
import { DepartmentSteps } from '@/types/steps';

interface ChooseCollegeProps {
  changeDepartMentStep: (step: DepartmentSteps) => void;
  campus: '인문캠퍼스' | '자연캠퍼스';
  setCollegeId: (collegeId: number) => void;
}
function ChooseCollege({ changeDepartMentStep, campus, setCollegeId }: ChooseCollegeProps) {
  const colleges = useCollege(campus);
  const { setMessages } = useMessagesStore();

  useEffect(() => {
    const message = campus === '인문캠퍼스' ? systemMessage.seoulCampusIntro : systemMessage.yonginCampusIntro;
    setMessages([{ role: 'system', message }]);
  }, []);

  const handleClick = (collegeId: number, collegeName: string) => {
    changeDepartMentStep('학과 선택');
    setCollegeId(collegeId);
    setMessages([{ role: 'user', message: collegeName }]);
  };

  return (
    <div className="mt-3">
      <MenuList>
        <MenuList.Title title="단과대학을 선택해주세요" />
        {colleges.map(({ name, collegeId }) => (
          <Checkbox label={name} key={collegeId} onClick={() => handleClick(collegeId, name)} />
        ))}
      </MenuList>
    </div>
  );
}

export default ChooseCollege;
