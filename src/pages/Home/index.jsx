import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CardItem from '../../components/CardItem';

function Home() {
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    axios
      .get('https://raw.githubusercontent.com/mledoze/countries/master/countries.json')
      .then((res) => {
        const dados = res.data.map((pais) => ({
          cca3: pais.cca3,
          cca2: pais.cca2.toLowerCase(),
          name: { common: pais.name.common },
        }));
        setPaises(dados);
      })
      .catch((err) => {
        console.error('Erro ao carregar países:', err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-4">🌍 Lista de Países</h1>

      <div className="text-center mb-6">
        <Link
          to="/favoritos"
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
        >
          Ver Favoritos ⭐
        </Link>
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {paises.map((pais) => (
          <CardItem key={pais.cca3} pais={pais} />
        ))}
      </ul>
    </div>
  );
}

export default Home;