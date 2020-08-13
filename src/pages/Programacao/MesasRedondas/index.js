import React from 'react';
import PageDefault from '../../../components/PageDefault';
import mesas_redondas from '../../../data/mesas_redondas.json';
import styled from 'styled-components';
import '../index.css';

const ContentWrapper = styled.div`
  margin-bottom: 30px;
`;

function MesasRedondas() {
  return(
    <PageDefault title="Mesas Redondas">
      {mesas_redondas.map((mesa_redonda) => {
        return (
          <ContentWrapper key={mesa_redonda.título}>
            <h2>{mesa_redonda.título}</h2>
            <p>{mesa_redonda.participantes}</p>
          </ContentWrapper>
        );
      })}
    </PageDefault>
  );
}

export default MesasRedondas;
