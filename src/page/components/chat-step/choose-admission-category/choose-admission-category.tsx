import AdmissionCategoryMenus from '@/components/chat-step/choose-admission-category/admission-category-menus';
import Chat from '@/components/chat/chat';
import systemMessage from '@/constants/message';
import useAdmissionDetail from '@/hooks/querys/useAdmissionDetail';
import useAdmissionStore from '@/stores/store/admission-store';
import useMessagesStore from '@/stores/store/message-store';
import { ADDMISSION } from '@/types/admission-type';
import { ChatSteps } from '@/types/chat';

interface Props {
  changeStep: (step: ChatSteps) => void;
}

function ChooseAdmissionCategory({ changeStep }: Props) {
  const { setMessages } = useMessagesStore();
  const { admissionType, setAdmissionCategory } = useAdmissionStore();
  const data = useAdmissionDetail(admissionType);

  const selectCategory = (catgory: string) => {
    changeStep('admission_category_result');
    setMessages([
      {
        role: 'system',
        message: systemMessage.admissionGuide(ADDMISSION[admissionType!]),
      },
      {
        role: 'user',
        message: catgory,
      },
    ]);
    setAdmissionCategory(catgory);
  };

  return (
    <div>
      <Chat role="system">{systemMessage.admissionGuide(ADDMISSION[admissionType!])}</Chat>
      <div className="mt-2">
        <AdmissionCategoryMenus admissionType={admissionType!} data={data} selectCategory={selectCategory} />
      </div>
    </div>
  );
}

export default ChooseAdmissionCategory;
