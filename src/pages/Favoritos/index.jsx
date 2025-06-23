import { useFavoritos } from '../../context/FavoritosContext';
import CardItem from '../../components/CardItem';
import { Link } from 'react-router-dom';

export default function Favoritos() {
  const { favoritos } = useFavoritos();

  return (
    <div className="min-h-screen bg-yellow-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-4">⭐ Países Favoritos</h1>

      <div className="text-center mb-6">
  <Link
    to="/"
    className="inline-block px-6 py-3 rounded-lg bg-blue-200 text-white text-lg font-bold shadow-lg hover:bg-blue-800 hover:scale-105 transform transition"
  >
    ← Voltar para Home
  </Link>
</div>

      {favoritos.length === 0 ? (
        <p className="text-center text-gray-600">Nenhum país favoritado ainda.</p>
      ) : (
        <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {favoritos.map((pais) => (
            <CardItem key={pais.cca3} pais={pais} />
          ))}
        </ul>
      )}
    </div>
  );
}