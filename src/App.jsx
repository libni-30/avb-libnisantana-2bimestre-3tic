import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detalhes from './pages/Detalhes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes/:code" element={<Detalhes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;