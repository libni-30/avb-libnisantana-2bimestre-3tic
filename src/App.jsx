import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CountryDetail from './pages/Favoritos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pais/:code" element={<CountryDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;