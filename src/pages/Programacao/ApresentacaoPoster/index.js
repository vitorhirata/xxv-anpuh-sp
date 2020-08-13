import React from 'react';
import PageDefault from '../../../components/PageDefault';
import posteres from '../../../data/posteres.json';
import styled from 'styled-components';
import '../index.css';

const ContentWrapper = styled.div`
  margin-bottom: 30px;
`;

function ApresentacaoPoster() {
  return(
    <PageDefault title="Apresentação de pôster">
      {posteres.map((poster) => {
        return (
          <ContentWrapper key={poster.título}>
            <h2>{poster.título}</h2>
            <p>{poster.responsável}</p>
          </ContentWrapper>
        );
      })}
    </PageDefault>
  );
}

export default ApresentacaoPoster;
