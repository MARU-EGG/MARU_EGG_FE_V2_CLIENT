import { Suspense, useState } from 'react';
import Markdown from 'react-markdown';
import Chat from '@/components/chat/chat';
import AdmissionCategoryResult from '@/page/components/chat-step/admission-category-result/admission-category-result';
import ChooseAdmissionCategory from '@/page/components/chat-step/choose-admission-category/choose-admission-category';
import ChooseAdmission from '@/page/components/chat-step/choose-admission/choose-admission';
import QuestionResult from '@/page/components/chat-step/question-result/question-result';
import useMessagesStore from '@/stores/store/message-store';
import { ChatSteps } from '@/types/chat';

function Main() {
  const [steps, setSteps] = useState<ChatSteps>('choose_admission');
  const { messages } = useMessagesStore();

  const changeStep = (step: ChatSteps) => {
    setSteps(step);
  };

  return (
    <main className="flex h-full flex-col gap-6 overflow-y-auto py-6 pl-12 pr-3">
      <div>
        <div className="flex flex-col gap-2">
          {messages?.map((message, index) =>
            message.markdown ? (
              <Chat key={index} role={message.role}>
                <Markdown>{message.message}</Markdown>
              </Chat>
            ) : (
              <Chat key={index} role={message.role}>
                {message.message}
              </Chat>
            ),
          )}
        </div>
      </div>
      <div>
        {steps === 'choose_admission' ? (
          <ChooseAdmission changeStep={changeStep} />
        ) : steps === 'choose_admission_category' ? (
          <Suspense>
            <ChooseAdmissionCategory changeStep={changeStep} />
          </Suspense>
        ) : steps === 'admission_category_result' ? (
          <AdmissionCategoryResult changeStep={changeStep} />
        ) : (
          <QuestionResult />
        )}
      </div>
    </main>
  );
}

export default Main;
