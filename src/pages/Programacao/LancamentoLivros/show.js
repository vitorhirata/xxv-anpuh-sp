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

  const Resumo = () => {
    if (livro.resumo === '') { return null; }
    return(
      <>
        <h4>RESUMO</h4>
        <TextWithNewLine>{livro.resumo}</TextWithNewLine>
        <br/>
      </>
    );
  }

  const InstrucaoCompra = () => {
    if (livro.instruçãoCompra === '') { return null; }
    return(
      <>
        <h4>INFORMAÇÕES PARA COMPRA</h4>
        <TextWithNewLine>
          <Linkify componentDecorator={linkTargetDecorator}>{livro.instruçãoCompra}</Linkify>
        </TextWithNewLine>
        <br/>
      </>
    );
  }

  const LinkYoutube = () => {
    if (livro.youtubeVideoId === '') { return null; }
    return(
      <>
        <h4>VIDEO DE APRESENTAÇÃO DO LIVRO</h4>
        <div style={{width: "100%", height: "200px"}}>
          <iframe title={`Livro: ${livro.título}`}
            id="ytplayer" type="text/html" width="100%" height="100%" allowFullScreen
            src={`https://www.youtube.com/embed/${livro.youtubeVideoId}`}
            frameBorder="0"></iframe>
        </div>
        <br/>
      </>
    );
  }

  const LinkVimeo = () => {
    if (livro.vimeoVideoId === '') { return null; }
    return(
      <>
        <h4>VIDEO DE APRESENTAÇÃO DO LIVRO</h4>
        <div style={{width: "100%", height: "200px"}}>
          <iframe title={`Livro: ${livro.título}`}
            id="ytplayer" type="text/html" width="100%" height="100%" allowFullScreen
            src={`https://player.vimeo.com/video/${livro.vimeoVideoId}`}
            frameBorder="0"></iframe>
        </div>
        <br/>
      </>
    );
  }

  return(
    <PageDefault title='Lançamento de Livros' backPath='/programacao/lancamento_livros'>
      <ContentWrapper key={`livro${livro.id}`}>
        <h2>{livro.título}</h2>
        <h3>{livro.autor}</h3>
        <br/>
        <LinkYoutube />
        <LinkVimeo />
        <Resumo />
        <InstrucaoCompra />
      </ContentWrapper>
    </PageDefault>
  );
}

export default LancamentoLivrosShow;
