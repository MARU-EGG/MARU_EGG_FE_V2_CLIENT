import { useLayoutEffect, useState } from 'react';

export function useOnboardingVisibility() {
  const [showOnboarding, setShowOnboarding] = useState<boolean>(false);

  const closeOnboarding = () => {
    setShowOnboarding(false);
    localStorage.setItem('isFirstVisit', 'false');
  };

  useLayoutEffect(() => {
    if (!localStorage.getItem('isFirstVisit')) {
      setShowOnboarding(true);
    }
  }, []);

  return { showOnboarding, closeOnboarding };
}
