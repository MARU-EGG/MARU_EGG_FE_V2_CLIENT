import { Suspense, useState } from 'react';
import APIErrorBoundary from '@/components/error/api-error-boundary';
import ChatLoadingSpinner from '@/components/loading/chat-loading-spinner';
import ChooseCampus from '@/page/components/chat-step/choose-department/steps/choose-campuse';
import ChooseCollege from '@/page/components/chat-step/choose-department/steps/choose-college';
import ChooseDepartment from '@/page/components/chat-step/choose-department/steps/choose-department';
import Funnel from '@/page/components/funnel/funnel';
import { ResponseCollegeType } from '@/types/department';
import { DepartmentSelectionSteps } from '@/types/steps';
import { ChatSteps } from '@/types/steps';

interface ChooseDepartmentStepsProps {
  changeStep: (step: ChatSteps) => void;
}

function ChooseDepartmentSteps({ changeStep }: ChooseDepartmentStepsProps) {
  const [steps, setSteps] = useState<DepartmentSelectionSteps>('캠퍼스 선택 단계');
  const [campus, setCampus] = useState<'인문캠퍼스' | '자연캠퍼스' | null>(null);
  const [college, setCollege] = useState<ResponseCollegeType | null>(null);

  const changeDepartMentStep = (step: DepartmentSelectionSteps) => {
    setSteps(step);
  };

  return (
    <Funnel<DepartmentSelectionSteps> step={steps}>
      <Funnel.Step<DepartmentSelectionSteps> step="캠퍼스 선택 단계">
        <ChooseCampus changeDepartMentStep={changeDepartMentStep} setCampus={setCampus} />
      </Funnel.Step>
      <Funnel.Step<DepartmentSelectionSteps> step="단과대 선택 단계">
        <APIErrorBoundary>
          <Suspense fallback={<ChatLoadingSpinner />}>
            <ChooseCollege changeDepartMentStep={changeDepartMentStep} campus={campus!} setCollege={setCollege} />
          </Suspense>
        </APIErrorBoundary>
      </Funnel.Step>
      <Funnel.Step<DepartmentSelectionSteps> step="학과 선택 단계">
        <APIErrorBoundary>
          <Suspense fallback={<ChatLoadingSpinner />}>
            <ChooseDepartment changeStep={changeStep} college={college!} />
          </Suspense>
        </APIErrorBoundary>
      </Funnel.Step>
    </Funnel>
  );
}

export default ChooseDepartmentSteps;
