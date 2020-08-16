import React from 'react';
import PageDefault from '../../../components/PageDefault';
import posteres from '../../../data/posteres.json';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../index.css';

function ApresentacaoPoster() {
  return(
    <PageDefault title="Apresentação de pôsteres">
      <ul>
        {posteres.map((poster) => {
          return (
            <>
              <li key={`poster${poster.id}${poster.título}`}>
                <Link to={`/programacao/apresentacao_poster/${poster.id}`}>
                  <h2 className='text-link'>{poster.título}</h2>
                  <p>{poster.responsável}</p>
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

export default ApresentacaoPoster;
