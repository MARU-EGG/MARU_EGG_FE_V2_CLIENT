import { useEffect } from 'react';
import Selector from '@/components/selector/selector';
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
            <Selector key={option.label}>
              <Selector.Header>{`${option.label}전형`}</Selector.Header>
              {option.children.map((menu) => (
                <Selector.Option key={menu} onClick={() => selectCategory(menu)}>
                  {menu}
                </Selector.Option>
              ))}
            </Selector>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChooseAdmissionCategory;
