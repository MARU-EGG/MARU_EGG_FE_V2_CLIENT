import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { Route, Routes } from 'react-router-dom';
import MaruEgg from '@/page/maru-egg';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  useEffect(() => {
    if (!window.location.href.includes('localhost')) {
      ReactGA.initialize(import.meta.env.GOOGLE_ANALYTICS_MEASUREMENT_ID);
    }
  }, []);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<MaruEgg />}></Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
