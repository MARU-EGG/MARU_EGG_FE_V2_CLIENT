import { useState } from 'react';
import ONBOARDING_STEPS from '@/constants/onboarding-steps';

function useOnboardingSteps() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const currentOnboardPage = ONBOARDING_STEPS[currentStep];
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === ONBOARDING_STEPS.length - 1;

  const handlePrev = () => {
    if (!isFirstStep) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (isLastStep) {
      setCurrentStep(0);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return { currentStep, currentOnboardPage, handleNext, handlePrev };
}

export default useOnboardingSteps;
