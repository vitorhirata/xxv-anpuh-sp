import React from 'react';
import PageDefault from '../../../components/PageDefault';
import posteres from '../../../data/posteres.json';
import styled from 'styled-components';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../index.css';

const ContentWrapper = styled.div`
  margin-bottom: 30px;
`;

function ApresentacaoPoster() {
  return(
    <PageDefault title="Apresentação de pôster">
      {posteres.map((poster) => {
        return (
          <ContentWrapper key={`poster${poster.id}`}>
            <Link to={`/programacao/apresentacao_poster/${poster.id}`}>
              <h2>{poster.título}</h2>
              <p>{poster.responsável}</p>
            </Link>
          </ContentWrapper>
        );
      })}
    </PageDefault>
  );
}

export default ApresentacaoPoster;
