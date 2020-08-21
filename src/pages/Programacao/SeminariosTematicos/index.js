import React from 'react';
import PageDefault from '../../../components/PageDefault';
import seminarios_tematicos from '../../../data/seminarios_tematicos.json';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../index.css';

function SeminariosTematicos() {
  return(
    <PageDefault title="Seminários Temáticos">
      <ul>
        {seminarios_tematicos.map((seminario_tematico) => {
          return (
            <li key={`seminario_tematico${seminario_tematico.id}`}>
              <Link to={`/programacao/seminarios_tematicos/${seminario_tematico.id}`}>
                <h2 className='text-link'>{seminario_tematico.título}</h2>
                <p>{seminario_tematico.coordenadores}</p>
              </Link>
              <hr/>
            </li>
          );
        })}
      </ul>
    </PageDefault>
  );
}

export default SeminariosTematicos;
