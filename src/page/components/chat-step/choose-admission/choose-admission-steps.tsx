import { useState } from 'react';
import { Suspense } from 'react';
import ChatLoadingSpinner from '@/components/loading/chat-loading-spinner';
import AdmissionCategoryResult from '@/page/components/chat-step/choose-admission/steps/admission-category-result';
import ChooseAdmission from '@/page/components/chat-step/choose-admission/steps/choose-admission';
import ChooseAdmissionCategory from '@/page/components/chat-step/choose-admission/steps/choose-admission-category';
import Funnel from '@/page/components/funnel/funnel';
import useAdmissionStore from '@/stores/store/admission-store';
import { AdmissionSelectionSteps, ChatSteps } from '@/types/steps';

interface ChooseAdmissionStepsProps {
  changeStep: (step: ChatSteps) => void;
}

function ChooseAdmissionSteps({ changeStep }: ChooseAdmissionStepsProps) {
  const [steps, setSteps] = useState<AdmissionSelectionSteps>('입시전형 선택 단계');
  const { admissionType, admissionCategory } = useAdmissionStore();

  const changeAdmissionStep = (steps: AdmissionSelectionSteps) => {
    setSteps(steps);
  };

  return (
    <Funnel<AdmissionSelectionSteps> step={steps}>
      <Funnel.Step<AdmissionSelectionSteps> step="입시전형 선택 단계">
        <Suspense fallback={<ChatLoadingSpinner />}>
          <ChooseAdmission changeAdmissionStep={changeAdmissionStep} />
        </Suspense>
      </Funnel.Step>
      <Funnel.Step<AdmissionSelectionSteps> step="세부전형 선택 단계">
        <Suspense fallback={<ChatLoadingSpinner />}>
          <ChooseAdmissionCategory changeAdmissionStep={changeAdmissionStep} admissionType={admissionType!} />
        </Suspense>
      </Funnel.Step>
      <Funnel.Step<AdmissionSelectionSteps> step="세부전형 선택 결과 확인 단계">
        <Suspense fallback={<ChatLoadingSpinner />}>
          <AdmissionCategoryResult
            changeStep={changeStep}
            admissionType={admissionType!}
            admissionCategory={admissionCategory!}
          />
        </Suspense>
      </Funnel.Step>
    </Funnel>
  );
}

export default ChooseAdmissionSteps;
