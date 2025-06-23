import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detalhes from './pages/Detalhes';
import Favoritos from './pages/Favoritos';
import { FavoritosProvider } from './context/FavoritosContext';

function App() {
  return (
    <FavoritosProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalhes/:code" element={<Detalhes />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
    </FavoritosProvider>
  );
}

export default App;
