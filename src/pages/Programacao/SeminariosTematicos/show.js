import React from 'react';
import PageDefault from '../../../components/PageDefault';
import seminarios_tematicos from '../../../data/seminarios_tematicos.json';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ShowMoreText from 'react-show-more-text';
import '../index.css';

const ContentWrapper = styled.div`
  margin-bottom: 30px;
`;

const H3 = styled.h3`
  font-weight: 300;
  font-size: 22px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`;

const TextWithNewLine = styled.p`
  white-space:pre-wrap;
`;

function SeminariosTematicosShow() {
  const { id } = useParams();
  const seminario_tematico = seminarios_tematicos.filter((seminario_tematico) => {return seminario_tematico.id === Number(id)})[0];

  return(
    <PageDefault title="Seminários Temáticos" backPath="/programacao/seminarios_tematicos">
      <ContentWrapper>
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
        <br/>
        <H3>Programação</H3>
        <ul>
        {
          seminario_tematico.programação.map((seminario_tematico_programacao_item) => {
            return (
              <li key={`seminario_tematico_programacao_item${seminario_tematico_programacao_item.seção}`}>
                <h3>{seminario_tematico_programacao_item.seção}</h3>
                <ul>
                  {
                    seminario_tematico_programacao_item.eventos.map((seminario_tematico_evento) => {
                      return (
                        <li key={`seminario_tematico_resumo${seminario_tematico_evento.título}`}>
                          <h5 className='agenda'>{seminario_tematico_evento.título}</h5>
                          <h5 className='agenda-small'>{seminario_tematico_evento.responsável}</h5>
                          <span className='see-more-resumo'>
                            <ShowMoreText
                              lines={2}
                              more='Ver mais'
                              less='Ocultar'
                              anchorClass='see-more'
                              expanded={false}
                              width={280}
                            >
                              <p className='see-more-resumo'>{'Resumo: ' + seminario_tematico_evento.resumo}</p>
                            </ShowMoreText>
                          </span>
                        </li>
                      );})
                  }
                </ul>
              </li>
            );})
        }
        </ul>
      </ContentWrapper>
    </PageDefault>
  );
}

export default SeminariosTematicosShow;
