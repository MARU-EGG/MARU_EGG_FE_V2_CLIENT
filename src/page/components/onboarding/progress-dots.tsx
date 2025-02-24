interface ProgressDotsProps {
  currentStep: number;
  totalSteps: number;
}

function ProgressDots({ currentStep, totalSteps }: ProgressDotsProps) {
  return (
    <div className="absolute bottom-16 flex w-full justify-center space-x-2 px-4">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`h-2 rounded-full transition-all duration-300 ${
            index === currentStep ? 'w-2 bg-primary' : 'w-2 bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

export default ProgressDots;
