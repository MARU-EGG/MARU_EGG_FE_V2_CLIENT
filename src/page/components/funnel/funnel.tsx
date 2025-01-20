import React from 'react';
import Step from '@/page/components/funnel/step';
import { ChatSteps } from '@/types/chat';

interface FunnelProps {
  step: ChatSteps;
  children: React.ReactNode;
}

function Funnel({ step, children }: FunnelProps) {
  const childrenArray = React.Children.toArray(children);
  const targetStep = childrenArray.find((child) => React.isValidElement(child) && child.props.step === step);
  return <>{targetStep}</>;
}

Funnel.Step = Step;

export default Funnel;
