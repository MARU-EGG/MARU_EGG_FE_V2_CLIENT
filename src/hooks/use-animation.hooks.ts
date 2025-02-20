import { useEffect, useState } from 'react';

export function useAnimation(condition: boolean) {
  const [isComplete, setIsComplete] = useState(false);
  const [animationTrigger, setAnimationTrigger] = useState(false);

  useEffect(() => {
    if (condition) {
      setIsComplete(true);

      requestAnimationFrame(() => {
        setAnimationTrigger(true);
      });
    } else {
      setAnimationTrigger(false);
    }
  }, [condition]);

  const onTransitionEnd = () => {
    if (!condition) {
      setIsComplete(false);
    }
  };

  const shouldRender = condition || isComplete;

  return {
    shouldRender,
    onTransitionEnd,
    animationTrigger,
  };
}
