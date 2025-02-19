import ONBOARDING_STEPS from '@/constants/onboarding-steps';
import useOnboardingSteps from '@/hooks/use-onboarding-step';
import ProgressDots from '@/page/components/onboarding/progress-dots';

interface OnboardingProps {
  closeOnboarding: () => void;
}

function Onboarding({ closeOnboarding }: OnboardingProps) {
  const { currentStep, currentOnboardPage, handleNext, handlePrev } = useOnboardingSteps();

  return (
    <div className="absolute z-50 h-full w-full bg-[#19181D80]">
      <div className="absolute left-1/2 top-1/2 h-[411px] w-80 -translate-x-1/2 -translate-y-1/2 rounded-xl">
        <div className="flex h-full flex-col">
          <img alt="온보딩 페이지" className="h-[232px]" src={currentOnboardPage.image}></img>
          <div className="flex h-32 flex-col justify-center bg-white">
            <span className="block text-center text-body font-semibold">
              {currentOnboardPage.title}
              <br />
              {currentOnboardPage?.subtitle}
            </span>
            <span className="block text-center text-label text-gray-400">{currentOnboardPage.description}</span>
          </div>
          <div className="flex flex-1 overflow-hidden rounded-b-xl">
            <button onClick={handlePrev} className="w-1/2 bg-slate-300 text-body text-slate-600">
              이전
            </button>
            <button onClick={handleNext} className="w-1/2 bg-primary text-body text-white">
              다음
            </button>
          </div>
        </div>
        <ProgressDots currentStep={currentStep} totalSteps={ONBOARDING_STEPS.length} />
        <div className="mt-5">
          <button onClick={closeOnboarding} className="w-80 rounded-2xl bg-primary py-3 text-white shadow-2xl">
            마루에그 바로 시작하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
