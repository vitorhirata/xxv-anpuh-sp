import React from 'react';
import PageDefault from '../../../components/PageDefault';
import seminarios_tematicos from '../../../data/seminarios_tematicos.json';
import styled from 'styled-components';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../index.css';

const ContentWrapper = styled.div`
  margin-bottom: 30px;
`;


function SeminariosTematicos() {
  return(
    <PageDefault title="Seminários Temáticos">
      {seminarios_tematicos.map((seminario_tematico) => {
        return (
          <ContentWrapper key={`seminario_tematico${seminario_tematico.id}`}>
            <Link to={`/programacao/seminarios_tematicos/${seminario_tematico.id}`}>
              <h2>{seminario_tematico.título}</h2>
              <p>{seminario_tematico.coordenadores}</p>
            </Link>
          </ContentWrapper>
        );
      })}
    </PageDefault>
  );
}

export default SeminariosTematicos;
