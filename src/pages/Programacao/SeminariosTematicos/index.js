import React from 'react';
import PageDefault from '../../../components/PageDefault';
import seminarios_tematicos from '../../../data/seminarios_tematicos.json';
import styled from 'styled-components';
import '../index.css';

const ContentWrapper = styled.div`
  margin-bottom: 30px;
`;


function SeminariosTematicos() {
  return(
    <PageDefault title="Seminários Temáticos">
      {seminarios_tematicos.map((seminario) => {
        return (
          <ContentWrapper key={seminario.título}>
            <h2>{seminario.título}</h2>
            <p>{seminario.coordenadores}</p>
          </ContentWrapper>
        );
      })}
    </PageDefault>
  );
}

export default SeminariosTematicos;
