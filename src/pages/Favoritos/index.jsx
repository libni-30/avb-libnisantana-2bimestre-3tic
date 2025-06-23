import { useFavoritos } from '../../context/FavoritosContext';
import CardItem from '../../components/CardItem';

export default function Favoritos() {
  const { favoritos } = useFavoritos();

  return (
    <div className="min-h-screen bg-yellow-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">⭐ Países Favoritos</h1>
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

