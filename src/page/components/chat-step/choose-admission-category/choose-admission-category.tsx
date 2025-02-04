import { useEffect } from 'react';
import TextMenu from '@/components/menu-items/text-menu/text-menu';
import MenuList from '@/components/menu-list/menu-list';
import systemMessage from '@/constants/message';
import useAdmissionDetail from '@/hooks/querys/useAdmissionDetail';
import DraggableScroller from '@/page/components/chat-step/choose-admission-category/draggable-scroller';
import useAdmissionStore from '@/stores/store/admission-store';
import useMessagesStore from '@/stores/store/message-store';
import { ADDMISSION, AdmissionType } from '@/types/admission-type';
import { ChatSteps } from '@/types/chat';
import { apiEventGATrigger } from '@/utils/ga-trigger';

interface Props {
  changeStep: (step: ChatSteps) => void;
  admissionType: AdmissionType;
}

function ChooseAdmissionCategory({ admissionType, changeStep }: Props) {
  const { setMessages } = useMessagesStore();
  const { setAdmissionCategory } = useAdmissionStore();
  const data = useAdmissionDetail(admissionType);

  const selectCategory = (category: string) => {
    changeStep('상세전형 선택 결과');
    setMessages([
      {
        role: 'user',
        message: category,
      },
    ]);
    setAdmissionCategory(category);
    apiEventGATrigger({
      category: 'admission category select',
      action: 'click',
      label: `${category}질문`,
      value: 1,
    });
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
        <DraggableScroller>
          {data.map((option) => (
            <MenuList key={option.label}>
              <MenuList.Title title={`${option.label}전형`} />
              {option.children.map((menu) => (
                <TextMenu label={menu} key={menu} onClick={() => selectCategory(menu)} />
              ))}
            </MenuList>
          ))}
        </DraggableScroller>
      </div>
    </div>
  );
}

export default ChooseAdmissionCategory;
