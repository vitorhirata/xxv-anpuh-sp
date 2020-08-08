import React from 'react';
import PageDefault from '../../components/PageDefault';
import styled from 'styled-components';

const P = styled.p`
    font-weight: 300;
    font-size: 14px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    position: relative;
    margin: 15px 0px;
`;


function Contato() {
  return(
    <PageDefault title="Contato">
      <h2>Entre em contato conosco</h2>
      <h4>Responsável</h4>
      <P>Letícia Fernandes</P>
      <h4>E-mail</h4>
      <P>anpuhsp@usp.br</P>
      <h4>Horário de funcionamento</h4>
      <P>14h00 às 18h00</P>
    </PageDefault>
  );
}

export default Contato;
