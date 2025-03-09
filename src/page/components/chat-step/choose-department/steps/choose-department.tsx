import { useEffect } from 'react';
import BottomSheet from '@/components/bottom-sheet/bottom-sheet';
import DropdownMenu from '@/components/menu-items/dropdown-menu/dropdown-menu';
import MenuList from '@/components/menu-list/menu-list';
import useDepartment from '@/hooks/querys/useDepartment';
import { useBottomSheet } from '@/hooks/use-bottom-sheet-hooks';
import useAdmissionStore from '@/stores/store/admission-store';
import useMessagesStore from '@/stores/store/message-store';
import { ResponseCollegeType } from '@/types/department';
import { ChatSteps } from '@/types/steps';

interface ChooseDepartmentProps {
  changeStep: (step: ChatSteps) => void;
  college: ResponseCollegeType;
}

function ChooseDepartment({ changeStep, college }: ChooseDepartmentProps) {
  const departments = useDepartment(college.collegeId);
  const { setMessages } = useMessagesStore();
  const { open, onOpen, onClose } = useBottomSheet();
  const { admissionCategory, setQuestion } = useAdmissionStore();

  const selectDepartment = (department: string) => {
    setQuestion({
      label: '학과별 입시',
      category: 'PASSING_RESULT',
      question: `전형명:${admissionCategory}\n단과대학:${college.name}\n전공:${department}\n해당 내용의 입시 결과 알려줘`,
    });
    setMessages([{ role: 'user', message: department }]);
    changeStep('질문 결과 확인 단계');
  };

  useEffect(() => {
    setMessages([{ role: 'system', message: '학과를 선택해주세요' }]);
  }, []);
  return (
    <>
      <div className="mt-3">
        <MenuList>
          <MenuList.Title title="학과(부)를 선택해주세요"></MenuList.Title>
          <DropdownMenu label="여기를 눌러주세요" onClick={onOpen}></DropdownMenu>
        </MenuList>
      </div>
      <BottomSheet open={open} onClose={onClose}>
        <span className="text-label text-gray-600">학과(부)를 선택해주세요</span>
        <ul className="mt-3 flex flex-col overflow-y-auto">
          {departments.map(({ name, departmentId }) => (
            <li
              key={departmentId}
              className="w-full cursor-pointer rounded-md px-1 py-4 text-body hover:bg-gray-50"
              onClick={() => selectDepartment(name)}
            >
              {name}
            </li>
          ))}
        </ul>
      </BottomSheet>
    </>
  );
}

export default ChooseDepartment;
