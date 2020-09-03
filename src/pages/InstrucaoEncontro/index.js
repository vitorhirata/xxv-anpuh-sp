import React from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './index.css';

function InstrucaoEncontro() {
  return(
    <PageDefault title="Instruções de Participação">
      <ul>
        <li>
          <Link to='/instrucao_encontro/instrucao_ouvinte'>
            <h2 className='text-link' >Instruções aos ouvintes</h2>
          </Link>
        </li>
        <li>
          <Link to='/instrucao_encontro/instrucao_minicurso'>
            <h2 className='text-link'>Instruções aos participantes de Minicurso</h2>
          </Link>
        </li>
        <li>
          <Link to='/instrucao_encontro/instrucao_seminario_tematico'>
            <h2 className='text-link'>Instruções aos apresentadores de Seminários Temáticos</h2>
          </Link>
        </li>
      </ul>
    </PageDefault>
  );
}

export default InstrucaoEncontro;
