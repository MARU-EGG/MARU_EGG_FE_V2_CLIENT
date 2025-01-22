import { Route, Routes } from 'react-router-dom';
import MaruEgg from '@/page/maru-egg';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
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
