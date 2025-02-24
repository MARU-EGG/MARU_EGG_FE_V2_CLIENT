import Header from '@/components/header/header';
import Layout from '@/components/layout/layout';
import { useOnboardingVisibility } from '@/hooks/use-onboarding-visibility';
import Main from '@/page/components/main/main';
import Onboarding from '@/page/components/onboarding/onboarding';

function MaruEgg() {
  const { showOnboarding, closeOnboarding } = useOnboardingVisibility();
  return (
    <Layout>
      <Header />
      <Main />
      {showOnboarding && <Onboarding closeOnboarding={closeOnboarding} />}
    </Layout>
  );
}

export default MaruEgg;
