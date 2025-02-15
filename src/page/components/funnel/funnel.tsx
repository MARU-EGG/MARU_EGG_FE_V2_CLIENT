import React from 'react';
import Step from '@/page/components/funnel/step';

interface FunnelProps<T extends string> {
  step: T;
  children: React.ReactNode;
}

function Funnel<T extends string>({ step, children }: FunnelProps<T>) {
  const childrenArray = React.Children.toArray(children);
  const targetStep = childrenArray.find((child) => React.isValidElement(child) && child.props.step === step);
  return <>{targetStep}</>;
}

Funnel.Step = Step;

export default Funnel;
