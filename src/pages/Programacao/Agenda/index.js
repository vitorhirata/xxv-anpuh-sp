import React from 'react';
import PageDefault from '../../../components/PageDefault';
import styled from 'styled-components';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../index.css';

const H2div = styled.div`
    font-weight: 400;
    font-size: 14px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    position: relative;
    top: -5px;
`;

const DayWrapper = styled.div`
  margin-bottom: 20px;
`;

function Agenda() {
  return(
    <PageDefault title="Agenda">
      <DayWrapper>
        <h2>
          3ª Feira
          <br/>
          <H2div>08 de SETEMBRO</H2div>
        </h2>

        <h3>10h30 - 12h00</h3>
        <Link to='/programacao/mesas_redondas/1'>
          <h4 className='text-link'>Mesa-redonda 1</h4>
          <p>Ensino de História em tempos de pandemia – um retrato da educação virtual em São Paulo</p>
        </Link>
        <Link to='/programacao/mesas_redondas/2'>
          <h4 className='text-link'>Mesa-redonda 2</h4>
          <p>Direitas e Direitos Humanos no Brasil</p>
        </Link>

        <h3>14h - 18h</h3>
        <h4>Seminários Temáticos</h4>

        <h3>19h30 - 21h</h3>
        <h4>Conferência de Abertura</h4>
      </DayWrapper>

      <DayWrapper>
        <h2>
          4ª Feira
          <br/>
          <H2div>09 de SETEMBRO</H2div>
        </h2>

        <h3>8h30 - 10h30</h3>
        <h4>Minicursos</h4>
        <h3>10h30 - 12h00</h3>
        <Link to='/programacao/mesas_redondas/3'>
          <h4 className='text-link'>Mesa-redonda 3</h4>
          <p>Ensino de História: enfrentamentos e afrontamentos</p>
        </Link>
        <Link to='/programacao/mesas_redondas/4'>
          <h4 className='text-link'>Mesa-redonda 4</h4>
          <p>Histórias, desigualdades e diferenças: Deslocamentos e Xenofobias (ontem e hoje)</p>
        </Link>

        <h3>14h - 18h</h3>
        <h4>Seminários Temáticos</h4>
      </DayWrapper>

      <DayWrapper>
        <h2>
          5ª Feira
          <br/>
          <H2div>10 de SETEMBRO</H2div>
        </h2>

        <h3>8h30 - 10h30</h3>
        <h4>Minicursos</h4>
        <h3>10h30 - 12h00</h3>
        <Link to='/programacao/mesas_redondas/5'>
          <h4 className='text-link'>Mesa-redonda 5</h4>
          <p>Violência estrutural e Estado: sexismo, etnicismo, racismo e pobreza</p>
        </Link>
        <Link to='/programacao/mesas_redondas/6'>
          <h4 className='text-link'>Mesa-redonda 6</h4>
          <p>O discurso ambiental: entre utopias e catastrofismo</p>
        </Link>

        <h3>14h - 16h</h3>
        <h4>Fórum de Graduação</h4>

        <h3>16h30 - 18h30</h3>
        <h4>Assembleia</h4>
      </DayWrapper>

      <DayWrapper>
        <h2>
          6ª Feira
          <br/>
          <H2div>11 de SETEMBRO</H2div>
        </h2>

        <h3>8h30 - 10h30</h3>
        <h4>Minicursos</h4>
        <h3>10h30 - 12h00</h3>
        <Link to='/programacao/mesas_redondas/6'>
          <h4 className='text-link'>Mesa-redonda 7</h4>
          <p>História, arte e feminismos</p>
        </Link>
        <Link to='/programacao/mesas_redondas/6'>
          <h4 className='text-link'>Mesa-redonda 8</h4>
          <p>Histórias da infância, adolescência e juventude: desigualdades e diferenças</p>
        </Link>

        <h3>12h30 - 13h30</h3>
        <h4>Reuniões administrativas*</h4>
        <p>*As reuniões administrativas e de GTS devem ser previamente agendadas</p>

        <h3>14h - 18h</h3>
        <h4>Seminários Temáticos</h4>

        <h3>19h30 - 21h</h3>
        <h4>Conferência de Encerramento</h4>
      </DayWrapper>
    </PageDefault>
  );
}

export default Agenda;
