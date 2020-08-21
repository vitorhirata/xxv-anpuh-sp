import React from 'react';
import PageDefault from '../../../components/PageDefault';
import mesas_redondas from '../../../data/mesas_redondas.json';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../index.css';

function MesasRedondas() {
  return(
    <PageDefault title="Mesas Redondas">
      <ul>
        {mesas_redondas.map((mesa_redonda) => {
          return (
            <li key={`mesa_redonda${mesa_redonda.id}`}>
              <Link to={`/programacao/mesas_redondas/${mesa_redonda.id}`}>
                <h2 className='text-link'>{mesa_redonda.título}</h2>
                <p>{mesa_redonda.participantes}</p>
              </Link>
              <hr/>
            </li>
          );
        })}
      </ul>
    </PageDefault>
  );
}

export default MesasRedondas;
