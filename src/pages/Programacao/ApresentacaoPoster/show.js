import React from 'react';
import PageDefault from '../../../components/PageDefault';
import posteres from '../../../data/posteres.json';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import '../index.css';

const ContentWrapper = styled.div`
  margin-bottom: 30px;
`;

const TextWithNewLine = styled.p`
  white-space:pre-wrap;
`;

function ApresentacaoPosterShow() {
  const { id } = useParams();
  const poster = posteres.filter((poster) => {return poster.id === Number(id)})[0];

  return(
    <PageDefault title="Apresentação de pôsteres" backPath="/programacao/apresentacao_poster">
      <ContentWrapper key={`poster${poster.id}`}>
        <h2>{poster.título}</h2>
        <p>{poster.responsável}</p>
        <br/>
        <h4>APRESENTAÇÂO NO YOUTUBE</h4>
        <div style={{width: "100%", height: "200px"}}>
          <iframe title={`Poster: ${poster.título}`}
            id="ytplayer" type="text/html" width="100%" height="100%" allowFullScreen
            src={`https://www.youtube.com/embed/${poster.youtubeVideoId}`}
            frameBorder="0"></iframe>
        </div>
        <br/>
        <h4>RESUMO</h4>
        <TextWithNewLine>{poster.resumo}</TextWithNewLine>
      </ContentWrapper>
    </PageDefault>
  );
}

export default ApresentacaoPosterShow;
