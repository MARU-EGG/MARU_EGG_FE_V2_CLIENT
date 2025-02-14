import { Suspense, useState } from 'react';
import ChooseCampus from '@/page/components/chat-step/choose-department/steps/choose-campuse';
import ChooseCollege from '@/page/components/chat-step/choose-department/steps/choose-college';
import ChooseDepartment from '@/page/components/chat-step/choose-department/steps/choose-department';
import Funnel from '@/page/components/funnel/funnel';
import { DepartmentSteps } from '@/types/steps';
import { ChatSteps } from '@/types/steps';

interface ChooseDepartmentStepsProps {
  changeStep: (step: ChatSteps) => void;
}

function ChooseDepartmentSteps({ changeStep }: ChooseDepartmentStepsProps) {
  const [steps, setSteps] = useState<DepartmentSteps>('캠퍼스 선택');
  const [campus, setCampus] = useState<'인문캠퍼스' | '자연캠퍼스' | null>(null);
  const [collegeId, setCollegeId] = useState<number | null>(null);

  const changeDepartMentStep = (step: DepartmentSteps) => {
    setSteps(step);
  };

  return (
    <Funnel step={steps}>
      <Funnel.Step step="캠퍼스 선택">
        <ChooseCampus changeDepartMentStep={changeDepartMentStep} setCampus={setCampus} />
      </Funnel.Step>
      <Funnel.Step step="단과대 선택">
        <Suspense>
          <ChooseCollege changeDepartMentStep={changeDepartMentStep} campus={campus!} setCollegeId={setCollegeId} />
        </Suspense>
      </Funnel.Step>
      <Funnel.Step step="학과 선택">
        <Suspense>
          <ChooseDepartment changeStep={changeStep} collegeId={collegeId!} />
        </Suspense>
      </Funnel.Step>
    </Funnel>
  );
}

export default ChooseDepartmentSteps;
