interface StepProps {
  step: string;
  children: React.ReactNode;
}

function Step({ children }: StepProps) {
  return <>{children}</>;
}

export default Step;
