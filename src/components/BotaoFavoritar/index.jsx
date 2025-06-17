import { useFavoritos } from '../context/FavoritosContext';

export default function BotaoFavoritar({ pais }) {
  const { favoritos, adicionarFavorito, removerFavorito } = useFavoritos();

  const estaFavoritado = favoritos.some((f) => f.code === pais.code);

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
      className={`px-4 py-2 rounded-lg font-medium transition ${
        estaFavoritado
          ? 'bg-red-500 text-white hover:bg-red-600'
          : 'bg-green-500 text-white hover:bg-green-600'
      }`}
    >
      {estaFavoritado ? 'Desfavoritar' : 'Favoritar'}
    </button>
  );
}
