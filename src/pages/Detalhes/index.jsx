import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function Detalhes() {
  const { code } = useParams();
  const [pais, setPais] = useState(null);

  useEffect(() => {
    axios.get(`https://restcountries.com/v3.1/alpha/${code}`)
      .then(res => {
        setPais(res.data[0]);
      })
      .catch(err => {
        console.error('Erro ao carregar detalhes:', err);
      });
  }, [code]);

  if (!pais) {
    return <p className="text-center mt-10 text-lg">Carregando...</p>;
  }

  return (
    <div className="min-h-screen bg-blue-50 p-6 flex flex-col items-center">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xl">
        <h1 className="text-2xl font-bold text-center mb-4">{pais.name.common}</h1>
        <img
          src={pais.flags.png}
          alt={`Bandeira de ${pais.name.common}`}
          className="w-40 mx-auto mb-4 rounded"
        />
        <div className="space-y-2 text-gray-700">
          <p><strong>🌆 Capital:</strong> {pais.capital ? pais.capital[0] : 'N/A'}</p>
          <p><strong>👥 População:</strong> {pais.population.toLocaleString()}</p>
          <p><strong>🌍 Região:</strong> {pais.region}</p>
          <p><strong>🗺️ Sub-região:</strong> {pais.subregion}</p>
          <p><strong>📏 Área:</strong> {pais.area} km²</p>
        </div>
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            ⬅ Voltar
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Detalhes;