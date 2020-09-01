import React from 'react';
import PageDefault from '../../../components/PageDefault';
import livros from '../../../data/livros.json';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Linkify from 'react-linkify';
import '../index.css';

const ContentWrapper = styled.div`
  margin-bottom: 30px;
`;

const TextWithNewLine = styled.p`
  white-space:pre-wrap;
`;

const linkTargetDecorator = (href, text, key) => (
  <a href={href} key={key} target='_blank' rel='noopener noreferrer' className='text-link' style={{overflowWrap: 'break-word'}}>
    {text}
  </a>
)

function LancamentoLivrosShow() {
  const { id } = useParams();
  const livro = livros.filter((livro) => {return livro.id === Number(id)})[0];

  return(
    <PageDefault title='Lançamento de Livros' backPath='/programacao/lancamento_livros'>
      <ContentWrapper key={`livro${livro.id}`}>
        <h2>{livro.título}</h2>
        <h3>{livro.autor}</h3>
        <br/>
        {livro.resumo !== '' && <h4>RESUMO</h4> }
        <TextWithNewLine>{livro.resumo}</TextWithNewLine>
        <br/>
        {livro.instruçãoCompra !== '' && <h4>INFORMAÇÕES PARA COMPRA</h4> }
        <TextWithNewLine>
          <Linkify componentDecorator={linkTargetDecorator}>{livro.instruçãoCompra}</Linkify>
        </TextWithNewLine>
      </ContentWrapper>
    </PageDefault>
  );
}

export default LancamentoLivrosShow;
