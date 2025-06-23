import { Link } from 'react-router-dom';
import BotaoFavoritar from '../BotaoFavoritar';

export default function CardItem({ pais }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-all flex flex-col items-center gap-2">
      <Link to={`/detalhes/${pais.cca3}`} className="flex flex-col items-center gap-2">
        <img
          src={`https://flagcdn.com/w320/${pais.cca2}.png`}
          alt={`Bandeira de ${pais.name.common}`}
          className="w-20 h-auto rounded"
        />
        <span className="text-center font-medium">{pais.name.common}</span>
      </Link>
      <BotaoFavoritar pais={pais} />
    </div>
  );
}
