import { useEffect, useState } from 'react';

export function useAnimation(condition: boolean) {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (condition) setIsComplete(true);
  }, [condition]);

  const onTransitionEnd = () => {
    if (!condition) setIsComplete(false);
  };
  const shouldRender = condition || isComplete;
  const animationTrigger = condition && isComplete;

  return {
    shouldRender,
    onTransitionEnd,
    animationTrigger,
  };
}
