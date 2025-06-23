import { useFavoritos } from '../../context/FavoritosContext';

export default function BotaoFavoritar({ pais }) {
  const { favoritos, adicionarFavorito, removerFavorito } = useFavoritos();

  const estaFavoritado = favoritos.some((f) => f.cca3 === pais.cca3);

  function toggleFavorito() {
    if (estaFavoritado) {
      removerFavorito(pais);
    } else {
      adicionarFavorito(pais);
    }
  }

  return (
  <button
    onClick={toggleFavorito}
    style={{
      padding: '10px 20px',
      fontWeight: 'bold',
      fontSize: '16px',
      color: 'white',
      backgroundColor: estaFavoritado ? 'red' : 'green',
      border: '1px solid black',
      borderRadius: '8px',
      boxShadow: '2px 2px 6px rgba(0,0,0,0.2)',
    }}
  >
    {estaFavoritado ? 'Desfavoritar' : 'Favoritar'}
  </button>
);
}