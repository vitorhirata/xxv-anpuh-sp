import React from 'react';
import PageDefault from '../../../components/PageDefault';
import livros from '../../../data/livros.json';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../index.css';

function LancamentoLivros() {
  return(
    <PageDefault title="Lançamento de Livros">
      <ul>
        {livros.map((livro) => {
          return (
            <li key={`livro${livro.id}${livro.título}`}>
              <Link to={`/programacao/lancamento_livros/${livro.id}`}>
                <h2 className='text-link'>{livro.título}</h2>
                <p>{livro.autor}</p>
              </Link>
              <hr/>
            </li>
          );
        })}
      </ul>
    </PageDefault>
  );
}

export default LancamentoLivros;
