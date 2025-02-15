import { useEffect } from 'react';
import Checkbox from '@/components/menu-items/check-box/check-box';
import MenuList from '@/components/menu-list/menu-list';
import systemMessage from '@/constants/message';
import useCollege from '@/hooks/querys/useCollege';
import useMessagesStore from '@/stores/store/message-store';
import { ResponseCollegeType } from '@/types/department';
import { DepartmentSteps } from '@/types/steps';

interface ChooseCollegeProps {
  changeDepartMentStep: (step: DepartmentSteps) => void;
  campus: '인문캠퍼스' | '자연캠퍼스';
  setCollege: (college: ResponseCollegeType) => void;
}
function ChooseCollege({ changeDepartMentStep, campus, setCollege }: ChooseCollegeProps) {
  const colleges = useCollege(campus);
  const { setMessages } = useMessagesStore();

  useEffect(() => {
    const message = campus === '인문캠퍼스' ? systemMessage.seoulCampusIntro : systemMessage.yonginCampusIntro;
    setMessages([{ role: 'system', message }]);
  }, []);

  const handleClick = (college: ResponseCollegeType) => {
    changeDepartMentStep('학과 선택');
    setCollege(college);
    setMessages([{ role: 'user', message: college.name }]);
  };

  return (
    <div className="mt-3">
      <MenuList>
        <MenuList.Title title="단과대학을 선택해주세요" />
        {colleges.map((college) => (
          <Checkbox label={college.name} key={college.collegeId} onClick={() => handleClick(college)} />
        ))}
      </MenuList>
    </div>
  );
}

export default ChooseCollege;
