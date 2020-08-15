import React from 'react';
import PageDefault from '../../../components/PageDefault';
import minicursos from '../../../data/minicursos.json';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import '../index.css';

const ContentWrapper = styled.div`
  margin-bottom: 30px;
`;

const TextWithNewLine = styled.p`
  white-space:pre-wrap;
`;

function MinicursosShow() {
  const { id } = useParams();
  const minicurso = minicursos.filter((minicurso) => {return minicurso.id === Number(id)})[0];

  return(
    <PageDefault title="Minicursos" backPath="/programacao/minicursos">
      <ContentWrapper key={`minicurso${minicurso.id}`}>
        <h2>{minicurso.título}</h2>
        <p>{minicurso.coordenadores}</p>
        <br/>
        <TextWithNewLine>{minicurso.descrição}</TextWithNewLine>
      </ContentWrapper>
    </PageDefault>
  );
}

export default MinicursosShow;
