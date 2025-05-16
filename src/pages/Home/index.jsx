import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(res => {
        setPaises(res.data);
      })
      .catch(err => {
        console.error('Erro ao carregar países:', err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🌍 Lista de Países</h1>
      <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {paises.map((pais) => (
          <li
            key={pais.cca3}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all"
          >
            <Link to={`/detalhes/${pais.cca3}`} className="flex flex-col items-center gap-2">
              <img
                src={pais.flags.png}
                alt={pais.name.common}
                className="w-16 h-auto rounded"
              />
              <span className="text-center font-medium">{pais.name.common}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
