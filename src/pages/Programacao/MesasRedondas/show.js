import React from 'react';
import PageDefault from '../../../components/PageDefault';
import mesas_redondas from '../../../data/mesas_redondas.json';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import '../index.css';

const ContentWrapper = styled.div`
  margin-bottom: 30px;
`;

const TextWithNewLine = styled.p`
  white-space:pre-wrap;
`;

function MesasRedondasShow() {
  const { id } = useParams();
  const mesas_redonda = mesas_redondas.filter((mesas_redonda) => {return mesas_redonda.id === Number(id)})[0];

  return(
    <PageDefault title="Mesas Redondas" backPath="/programacao/mesas_redondas">
      <ContentWrapper key={`mesas_redonda${mesas_redonda.id}`}>
        <h2>{mesas_redonda.título}</h2>
        <h4 className='align-right'>{mesas_redonda.horário}</h4>
        <br/>
        <h4>DEBATEDORES</h4>
        <p>{mesas_redonda.participantes}</p>
        <br/>
        <TextWithNewLine>{mesas_redonda.resumo}</TextWithNewLine>
        <br/>
        <h4>LIVE NO YOUTUBE</h4>
        <div style={{width: "100%", height: "200px"}}>
          <iframe title={`mesas_redonda${mesas_redonda.título}`} id="ytplayer" type="text/html" width="100%" height="100%"
            src={mesas_redonda.youtubeLink}
            frameborder="0"></iframe>
        </div>
      </ContentWrapper>
    </PageDefault>
  );
}

export default MesasRedondasShow;
