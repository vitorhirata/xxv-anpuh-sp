import React from 'react';
import PageDefault from '../../../components/PageDefault';
import minicursos from '../../../data/minicursos.json';
import styled from 'styled-components';
import '../index.css';

const ContentWrapper = styled.div`
  margin-bottom: 30px;
`;

function Minicursos() {
  return(
    <PageDefault title="Minicursos">
      {minicursos.map((minicurso) => {
        return (
          <ContentWrapper key={minicurso.título}>
            <h2>{minicurso.título}</h2>
            <p>{minicurso.coordenadores}</p>
          </ContentWrapper>
        );
      })}
    </PageDefault>
  );
}

export default Minicursos;
