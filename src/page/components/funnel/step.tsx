import { ChatSteps } from '@/types/chat';

interface StepProps {
  step: ChatSteps;
  children: React.ReactNode;
}

function Step({ children }: StepProps) {
  return <>{children}</>;
}

export default Step;
