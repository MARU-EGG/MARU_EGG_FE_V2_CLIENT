interface StepProps<T extends string> {
  step: T;
  children: React.ReactNode;
}

function Step<T extends string>({ children }: StepProps<T>) {
  return <>{children}</>;
}

export default Step;
