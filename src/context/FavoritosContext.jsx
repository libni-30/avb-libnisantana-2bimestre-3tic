import { createContext, useContext, useState } from 'react';

const FavoritosContext = createContext();

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);

  function adicionarFavorito(pais) {
    setFavoritos((prev) => [...prev, pais]);
  }

  function removerFavorito(pais) {
    setFavoritos((prev) => prev.filter((item) => item.cca3 !== pais.cca3));
  }

  return (
    <FavoritosContext.Provider value={{ favoritos, adicionarFavorito, removerFavorito }}>
      {children}
    </FavoritosContext.Provider>
  );
}

export function useFavoritos() {
  return useContext(FavoritosContext);
}
