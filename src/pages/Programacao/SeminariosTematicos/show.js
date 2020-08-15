import React from 'react';
import PageDefault from '../../../components/PageDefault';
import seminarios_tematicos from '../../../data/seminarios_tematicos.json';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import '../index.css';

const ContentWrapper = styled.div`
  margin-bottom: 30px;
`;

const TextWithNewLine = styled.p`
  white-space:pre-wrap;
`;

function SeminariosTematicosShow() {
  const { id } = useParams();
  const seminario_tematico = seminarios_tematicos.filter((seminario_tematico) => {return seminario_tematico.id === Number(id)})[0];

  return(
    <PageDefault title="Seminários Temáticos" backPath="/programacao/seminarios_tematicos">
      <ContentWrapper key={`seminario_tematico${seminario_tematico.id}`}>
        <h2>{seminario_tematico.título}</h2>
        <p>{seminario_tematico.coordenadores}</p>
        <br/>
        <h4>Resumo</h4>
        <TextWithNewLine>{seminario_tematico.resumo}</TextWithNewLine>
        <br/>
        <h4>Justificativa</h4>
        <TextWithNewLine>{seminario_tematico.justificativa}</TextWithNewLine>
        <br/>
        <h4>Bibliografia</h4>
        <TextWithNewLine>{seminario_tematico.bibliografia}</TextWithNewLine>
      </ContentWrapper>
    </PageDefault>
  );
}

export default SeminariosTematicosShow;
