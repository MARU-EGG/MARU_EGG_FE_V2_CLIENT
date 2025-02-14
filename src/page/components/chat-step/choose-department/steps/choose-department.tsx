import { useEffect } from 'react';
import BottomSheet from '@/components/bottom-sheet/bottom-sheet';
import DropdownMenu from '@/components/menu-items/dropdown-menu/dropdown-menu';
import MenuList from '@/components/menu-list/menu-list';
import useDepartment from '@/hooks/querys/useDepartment';
import { useBottomSheet } from '@/hooks/use-bottom-sheet-hooks';
import useAdmissionStore from '@/stores/store/admission-store';
import useMessagesStore from '@/stores/store/message-store';
import { ChatSteps } from '@/types/steps';

interface ChooseDepartmentProps {
  changeStep: (step: ChatSteps) => void;
  collegeId: number;
}

function ChooseDepartment({ changeStep, collegeId }: ChooseDepartmentProps) {
  const departments = useDepartment(collegeId);
  const { setMessages } = useMessagesStore();
  const { open, onOpen, onClose } = useBottomSheet();
  const { admissionCategory, setQuestion } = useAdmissionStore();

  const selectDepartment = (department: string) => {
    setQuestion({
      label: '학과별 입시',
      category: 'PASSING_RESULT',
      question: `${admissionCategory}의 ${department} (과)에 대한 입시 결과 알려줘`,
    });
    setMessages([{ role: 'user', message: department }]);
    changeStep('상세전형 질문 결과');
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
