import React from 'react';
import PageDefault from '../../../components/PageDefault';
import minicursos from '../../../data/minicursos.json';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../index.css';

function Minicursos() {
  return(
    <PageDefault title="Minicursos">
      <ul>
        {minicursos.map((minicurso) => {
          return (
            <>
              <li key={`minicurso${minicurso.id}${minicurso.título}`}>
                <Link to={`/programacao/minicursos/${minicurso.id}`}>
                  <h2 className='text-link'>{minicurso.título}</h2>
                  <p>{minicurso.coordenadores}</p>
                </Link>
              </li>
              <hr/>
            </>
          );
        })}
      </ul>
    </PageDefault>
  );
}

export default Minicursos;
