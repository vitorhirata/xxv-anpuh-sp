import React from 'react';
import PageDefault from '../../../components/PageDefault';

function InstrucaoOuvinte() {
  return(
    <PageDefault title='Instruções de Participação' backPath='/instrucao_encontro'>
      <h2>Instruções aos ouvintes</h2>
      <h3>Olá! Bem vindo(a) ao XXV Encontro Estadual de História da ANPUH-SP. Leia com atenção as instruções de participação no evento. </h3>
      <h3><u>Atividades pelo YouTube</u></h3>
      <h4>Mesas Redondas e Conferências</h4>
      <p>As Mesas Redondas e Conferências estarão disponíveis em nosso Canal do YouTube, sendo uma atividade aberta a todos! Os interessados poderão enviar questões via chat do YouTube. </p>
      <h3><u>Atividades pelo Google Meet</u></h3>
      <h4>1. Simpósios Temáticos</h4>
      <p>Os inscritos como ouvintes poderão acompanhar os Simpósios Temáticos que tiverem autorizado o comparecimento de outros além dos apresentadores inscritos, mediante o número de vagas disponibilizadas pelos coordenadores</p>
      <p>O acesso aos STs será restrito em decorrência da natureza da atividade, voltada primordialmente à discussão entre os apresentadores e os coordenadores e do cuidado com a sobrecarga de conexão, além de possíveis ataques devidos à difusão do link da reunião. Os convites para participação das salas dos STs serão enviados aos ouvintes e apresentadores através do e-mail cadastrado no site do Encontro.</p>
      <h4>1.1 Orientações de participação dos ouvintes nos STs</h4>
      <ul className='bullet-list'>
        <li>Seja pontual, em especial se não fizer o acesso com o gmail, pois será necessário que o monitor autorize sua entrada.</li>
        <li>Por favor, fique atento aos combinados propostos com o coordenador e o monitor, comunicados no início da sessão -- como, por exemplo, as orientações para inscrição de comentários e questões.</li>
        <li>Solicita-se que entre com o microfone desligado e ligue apenas no momento de fazer alguma intervenção autorizada pelo coordenador. A câmera tende a sobrecarregar a conexão, especialmente no caso dos STs com mais pessoas; no entanto, deixá-la ligada ou não vai variar de acordo com o coordenador e a forma que ele preferir estabelecer a dinâmica. </li>
      </ul>
      <h4>2. Fórum de Graduação</h4>
      <p>O link será divulgado algumas horas antes da atividade aos inscritos que tiverem se cadastrado neste formulário (<a href='https://forms.gle/FRixJzdgH5UJoXUk9' target='_blank' rel='noopener noreferrer' className='text-link' >https://forms.gle/FRixJzdgH5UJoXUk9</a>). Além disso, o link também estará disponível no site do Encontro antes da atividade.</p>
      <h4>3. Assembleia</h4>
      <p>Essa atividade é destinada aos sócios da ANPUH-SP, se você for ouvinte e sócio é bem vindo; o link será divulgado com uma hora de antecedência no site do Encontro e via convite do Google Agenda.</p>
      <h4>4. Avisos importantes aos inscritos sem gmail</h4>
      <ul className='bullet-list'>
        <li>É possível que o convite vá diretamente para a caixa de spam. Por favor, cheque esta área do seu e-mail.</li>
        <li>Será necessário inserir seu nome completo antes de solicitar acesso à reunião. É muito importante que a informação de nome esteja correta para que o monitor responsável possa verificar seu nome na lista de pessoas autorizadas.</li>
      </ul>
    </PageDefault>
  );
}

export default InstrucaoOuvinte;
