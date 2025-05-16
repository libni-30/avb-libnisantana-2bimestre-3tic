import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function Detalhes() {
  const { code } = useParams();
  const [pais, setPais] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((res) => {
        setPais(res.data[0]);
        setCarregando(false);
      })
      .catch((err) => {
        console.error('Erro ao carregar detalhes do país:', err);
        setErro(true);
        setCarregando(false);
      });
  }, [code]);

  if (carregando) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Carregando detalhes...</p>
      </div>
    );
  }

  if (erro || !pais) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">Erro ao carregar os detalhes do país.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
        ← Voltar para a lista
      </Link>
      <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto">
        <div className="flex flex-col items-center">
          <img
            src={pais.flags.png}
            alt={`Bandeira de ${pais.name.common}`}
            className="w-32 h-auto mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{pais.name.common}</h2>
          <p className="text-gray-700 mb-1">
            <strong>Nome oficial:</strong> {pais.name.official}
          </p>
          <p className="text-gray-700 mb-1">
            <strong>Capital:</strong> {pais.capital?.[0] || 'N/A'}
          </p>
          <p className="text-gray-700 mb-1">
            <strong>Região:</strong> {pais.region}
          </p>
          <p className="text-gray-700 mb-1">
            <strong>Sub-região:</strong> {pais.subregion}
          </p>
          <p className="text-gray-700 mb-1">
            <strong>População:</strong> {pais.population.toLocaleString()}
          </p>
          <p className="text-gray-700 mb-1">
            <strong>Área:</strong> {pais.area.toLocaleString()} km²
          </p>
          <p className="text-gray-700 mb-1">
            <strong>Moeda:</strong>{' '}
            {pais.currencies
              ? Object.values(pais.currencies)
                  .map((moeda) => moeda.name)
                  .join(', ')
              : 'N/A'}
          </p>
          <p className="text-gray-700 mb-1">
            <strong>Idiomas:</strong>{' '}
            {pais.languages
              ? Object.values(pais.languages).join(', ')
              : 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
}
