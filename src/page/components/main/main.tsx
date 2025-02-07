import { Suspense, useEffect, useRef, useState } from 'react';
import APIErrorBoundary from '@/components/error/api-error-boundary';
import AdmissionCategoryResult from '@/page/components/chat-step/admission-category-result/admission-category-result';
import ChooseAdmissionCategory from '@/page/components/chat-step/choose-admission-category/choose-admission-category';
import ChooseAdmission from '@/page/components/chat-step/choose-admission/choose-admission';
import ChooseDepartment from '@/page/components/chat-step/choose-department/choose-department';
import QuestionResult from '@/page/components/chat-step/question-result/question-result';
import ReferenceResult from '@/page/components/chat-step/reference-result/reference-result';
import Funnel from '@/page/components/funnel/funnel';
import MessageHistory from '@/page/components/message-history/message-history';
import QuestionForm from '@/page/components/question-form/question-form';
import useAdmissionStore from '@/stores/store/admission-store';
import useMessagesStore from '@/stores/store/message-store';
import { ChatSteps } from '@/types/chat';

function Main() {
  const [steps, setSteps] = useState<ChatSteps>('입시유형 선택');
  const { admissionType, admissionCategory, question } = useAdmissionStore();
  const { messages } = useMessagesStore();
  const messageEndRef = useRef<HTMLDivElement | null>(null);

  const changeStep = (step: ChatSteps) => {
    setSteps(step);
  };

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, steps]);

  return (
    <>
      <main className="scrollbar flex h-full flex-col gap-6 overflow-y-auto overflow-x-hidden">
        <div className="flex-1 py-6 pl-12 pr-3">
          <MessageHistory />
          <Funnel step={steps}>
            <Funnel.Step step="입시유형 선택">
              <ChooseAdmission changeStep={changeStep} />
            </Funnel.Step>
            <Funnel.Step step="입시유형 상세전형 선택">
              <APIErrorBoundary>
                <Suspense>
                  <ChooseAdmissionCategory changeStep={changeStep} admissionType={admissionType!} />
                </Suspense>
              </APIErrorBoundary>
            </Funnel.Step>
            <Funnel.Step step="상세전형 선택 결과">
              <AdmissionCategoryResult
                changeStep={changeStep}
                admissionType={admissionType!}
                admissionCategory={admissionCategory!}
              />
            </Funnel.Step>
            <Funnel.Step step="상세전형 질문 결과">
              <APIErrorBoundary>
                <QuestionResult
                  admissionType={admissionType!}
                  admissionCategory={admissionCategory!}
                  question={question!}
                  changeStep={changeStep}
                />
              </APIErrorBoundary>
            </Funnel.Step>
            <Funnel.Step step="질문 출처 결과">
              <ReferenceResult changeStep={changeStep} />
            </Funnel.Step>
            <Funnel.Step step="상세전형 학과별 입시">
              <ChooseDepartment />
            </Funnel.Step>
          </Funnel>
        </div>
        <div>
          {admissionType && admissionCategory && <QuestionForm changeStep={changeStep} />}
          <div ref={messageEndRef}></div>
        </div>
      </main>
    </>
  );
}

export default Main;
