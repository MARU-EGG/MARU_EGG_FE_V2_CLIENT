import { useEffect } from 'react';
import TextMenu from '@/components/menu-items/text-menu/text-menu';
import MenuList from '@/components/menu-list/menu-list';
import systemMessage from '@/constants/message';
import useAdmissionDetail from '@/hooks/querys/useAdmissionDetail';
import useAdmissionStore from '@/stores/store/admission-store';
import useMessagesStore from '@/stores/store/message-store';
import { ADDMISSION, AdmissionType } from '@/types/admission-type';
import { ChatSteps } from '@/types/chat';

interface Props {
  changeStep: (step: ChatSteps) => void;
  admissionType: AdmissionType;
}

function ChooseAdmissionCategory({ admissionType, changeStep }: Props) {
  const { setMessages } = useMessagesStore();
  const { setAdmissionCategory } = useAdmissionStore();
  const data = useAdmissionDetail(admissionType);
  const selectCategory = (catgory: string) => {
    changeStep('상세전형 선택 결과');
    setMessages([
      {
        role: 'user',
        message: catgory,
      },
    ]);
    setAdmissionCategory(catgory);
  };

  useEffect(() => {
    setMessages([
      {
        role: 'system',
        message: systemMessage.admissionGuide(ADDMISSION[admissionType]),
      },
    ]);
  }, []);

  return (
    <div>
      <div className="mt-2">
        <div className="flex w-80 cursor-grab flex-nowrap items-start gap-5 overflow-x-auto">
          {data.map((option) => (
            <MenuList key={option.label}>
              <MenuList.Title title={`${option.label}전형`} />
              {option.children.map((menu) => (
                <TextMenu label={menu} key={menu} onClick={() => selectCategory(menu)} />
              ))}
            </MenuList>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChooseAdmissionCategory;
