import React from 'react';
import PageDefault from '../../../components/PageDefault';
import styled from 'styled-components';

const H2 = styled.h2`
    font-weight: 300;
    font-size: 22px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`;

const H2div = styled.div`
    font-weight: 400;
    font-size: 14px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    position: relative;
    top: -5px;
`;

const H3 = styled.h3`
    font-weight: 500;
    font-size: 16px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    margin-bottom: 5px;
`;

const H4 = styled.h4`
    font-weight: 400;
    font-size: 16px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    margin: 5px 0px;
`;

const P = styled.p`
    font-weight: 300;
    font-size: 14px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    position: relative;
    top: -5px;
    margin: 0px;
`;

function Agenda() {
  return(
    <PageDefault title="Agenda">
      <H2>
        3ª Feira
        <br/>
        <H2div>08 de SETEMBRO</H2div>
      </H2>

      <H3>10H30 - 12h00</H3>
      <H4>Mesa-redonda 1</H4>
      <P>Ensino de História em tempos de pandemia – um retrato da educação virtual em São Paulo</P>
      <H4>Mesa-redonda 2</H4>
      <P>Direitas e Direitos Humanos no Brasil</P>

      <H3>14h - 18h</H3>
      <H4>Seminários Temáticos</H4>

      <H3>19H30 - 21h</H3>
      <H4>Abertura</H4>
      <H4>Conferência</H4>


      <H2>
        4ª Feira
        <br/>
        <H2div>09 de SETEMBRO</H2div>
      </H2>

      <H3>8H30 - 10H30</H3>
      <H4>Minicursos</H4>
      <H3>10H30 - 12h00</H3>
      <H4>Mesa-redonda 3</H4>
      <P>Ensino de História: enfrentamentos e afrontamentos</P>
      <H4>Mesa-redonda 4</H4>
      <P>Histórias, desigualdades e diferenças: Deslocamentos e Xenofobias (ontem e hoje)</P>

      <H3>14h - 18h</H3>
      <H4>Seminários Temáticos</H4>


      <H2>
        5ª Feira
        <br/>
        <H2div>10 de SETEMBRO</H2div>
      </H2>

      <H3>8H30 - 10H30</H3>
      <H4>Minicursos</H4>
      <H3>10H30 - 12h00</H3>
      <H4>Mesa-redonda 5</H4>
      <P>Violência estrutural e Estado: sexismo, etnicismo, racismo e pobreza</P>
      <H4>Mesa-redonda 6</H4>
      <P>O discurso ambiental: entre utopias e catastrofismo</P>

      <H3>14h - 16h</H3>
      <H4>Fórum de Graduação</H4>

      <H3>16H30 - 18H30</H3>
      <H4>Assembleia</H4>


      <H2>
        6ª Feira
        <br/>
        <H2div>11 de SETEMBRO</H2div>
      </H2>

      <H3>8H30 - 10H30</H3>
      <H4>Minicursos</H4>
      <H3>10H30 - 12h00</H3>
      <H4>Mesa-redonda 7</H4>
      <P>História, arte e feminismos</P>
      <H4>Mesa-redonda 8</H4>
      <P>Histórias da infância, adolescência e juventude: desigualdades e diferenças</P>

      <H3>12H30 - 13H30</H3>
      <H4>Reuniões administrativas*</H4>
      <P>*As reuniões administrativas e de GTS devem ser previamente agendadas</P>

      <H3>14h - 18h</H3>
      <H4>Seminários Temáticos</H4>

      <H3>19H30 - 21h</H3>
      <H4>Conferência</H4>
      <H4>Encerramento</H4>

    </PageDefault>
  );
}

export default Agenda;
