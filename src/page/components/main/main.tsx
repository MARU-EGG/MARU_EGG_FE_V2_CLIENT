import { useCallback, useEffect, useRef, useState } from 'react';
import APIErrorBoundary from '@/components/error/api-error-boundary';
import ChooseAdmissionSteps from '@/page/components/chat-step/choose-admission/choose-admission-steps';
import ChooseDepartmentSteps from '@/page/components/chat-step/choose-department/choose-department-steps';
import QuestionResult from '@/page/components/chat-step/question-result/question-result';
import ReferenceResult from '@/page/components/chat-step/reference-result/reference-result';
import Funnel from '@/page/components/funnel/funnel';
import MessageHistory from '@/page/components/message-history/message-history';
import QuestionForm from '@/page/components/question-form/question-form';
import useAdmissionStore from '@/stores/store/admission-store';
import useMessagesStore from '@/stores/store/message-store';
import { ChatSteps } from '@/types/steps';

function Main() {
  const [steps, setSteps] = useState<ChatSteps>('입시 전형 선택 단계');
  const { admissionType, admissionCategory, question } = useAdmissionStore();
  const { messages } = useMessagesStore();
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  const changeStep = useCallback((step: ChatSteps) => {
    setSteps(step);
  }, []);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, steps]);

  return (
    <>
      <main className="scrollbar flex h-full flex-col gap-6 overflow-y-auto overflow-x-hidden">
        <div className="flex-1 py-6 pl-12 pr-3">
          <MessageHistory />
          <APIErrorBoundary>
            <Funnel<ChatSteps> step={steps}>
              <Funnel.Step<ChatSteps> step="입시 전형 선택 단계">
                <ChooseAdmissionSteps changeStep={changeStep} />
              </Funnel.Step>
              <Funnel.Step<ChatSteps> step="질문 결과 확인 단계">
                <QuestionResult
                  admissionType={admissionType!}
                  admissionCategory={admissionCategory!}
                  question={question!}
                  changeStep={changeStep}
                />
              </Funnel.Step>
              <Funnel.Step<ChatSteps> step="질문 출처 결과 확인 단계">
                <ReferenceResult changeStep={changeStep} />
              </Funnel.Step>
              <Funnel.Step<ChatSteps> step="학과별 입시 선택 단계">
                <ChooseDepartmentSteps changeStep={changeStep} />
              </Funnel.Step>
            </Funnel>
          </APIErrorBoundary>
        </div>
        <div className="mt-14">
          {admissionType && admissionCategory && <QuestionForm changeStep={changeStep} />}
          <div ref={messageEndRef}></div>
        </div>
      </main>
    </>
  );
}

export default Main;
