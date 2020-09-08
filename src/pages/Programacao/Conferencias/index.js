import React from 'react';
import PageDefault from '../../../components/PageDefault';
import '../index.css';


function Conferencias() {
  return(
    <PageDefault title="Conferências">
      <ul>
        <li>
          <h2>Conferência de Abertura</h2>
          <h3>Diferenças e desigualdades: inspirações?</h3>
          <h4>Terça-feira, 08 de setembro, às 19h30</h4>
          <br/>
          <p>Profª Márcia Motta (Presidente da ANPUH-BR)</p>
          <p>Mediação: Josianne Cerasoli (Presidente da ANPUH-SP)</p>
          <br/>
          <h4>LIVE NO YOUTUBE</h4>
          <div style={{width: "100%", height: "200px"}}>
            <iframe title="Conferência: Diferenças e desigualdades: inspirações?"
              id="ytplayer" type="text/html" width="100%" height="100%" allowFullScreen
              src="https://www.youtube.com/embed/YZUDQOsHy1o"
              frameBorder="0"></iframe>
          </div>
          <br/>
          <hr/>
        </li>
        <li>
          <h2>Conferência de Encerramento</h2>
          <h3>Sob o império do número: desigualdade, (in)diferença e singularidade histórica</h3>
          <h4>Sexta-feira, 11 de setembro, às 19h30</h4>
          <br/>
          <p>Profª Josianne Cerasoli (Presidente da ANPUH-SP)</p>
          <p>Mediação: Fábio Franzini (UNIFESP)</p>
          <br/>
          <h4>LIVE NO YOUTUBE</h4>
          <div style={{width: "100%", height: "200px"}}>
            <iframe title="Conferência: Sob o império do número: desigualdade, (in)diferença e singularidade histórica"
              id="ytplayer" type="text/html" width="100%" height="100%" allowFullScreen
              src="https://www.youtube.com/embed/2t7JqHsC6UQ"
              frameBorder="0"></iframe>
          </div>
          <br/>
          <hr/>
        </li>
      </ul>
    </PageDefault>
  );
}

export default Conferencias;
