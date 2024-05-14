import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TestCanvas from './Pages/TestCanvas';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TestCanvas />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
