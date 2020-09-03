import React from 'react';
import PageDefault from '../../../components/PageDefault';

function InstrucaoMinicurso() {
  return(
    <PageDefault title='Instruções de Participação' backPath='/instrucao_encontro'>
      <h2>Instruções aos participantes de Minicurso</h2>
      <h3>Para acessar os minicursos, você receberá um <strong>convite do Google Agenda no e-mail cadastrado no site do evento.</strong> Observações importantes:</h3>
      <ul className='bullet-list'>
        <li> Somente os inscritos quites terão acesso às salas do Google Meets.  </li>
        <li> <strong>Para cada um dos dias dos minicursos, uma sala diferente no Google Meet será criada.</strong> Assim, você receberá três convites no e-mail, para cada um dos dias. A previsão de envio do convite é até 07/09, aos participantes que estiverem quites com as inscrições. caso não tenha recebido, cheque a caixa de spam e confirme em sua área de inscrito se o seu pagamento foi efetuado. não será possível fazer o pagamento após o início do evento para ter acesso à sala.  </li>
        <li> Certifique-se de que está acessando o link correto da sala do Google Meet para aquele dia.  </li>
        <li> Caso você não use Gmail, ao clicar no link, será requisitado que você coloque seu nome. Pedimos que você <strong>coloque seu nome por extenso</strong>, pois nomes que não constarem na lista de inscritos, não serão permitidos nas salas.  </li>
        <li> <strong>Seja pontual, em especial se não fizer o acesso com o Gmail, pois será necessário que o monitor autorize sua entrada.</strong> </li>
        <li> A presença nos minicursos será controlada. Para receber o certificado de participação, a presença deverá ser registrada em no mínimo 2 de 3 dias de minicurso.  </li>
        <li> A lista de presença será enviada no chat no início e no fim de cada aula. O inscrito deverá preencher o formulário de presença durante o horário do minicurso.  </li>
        <li> No primeira aula, o/a ministrante passará instruções de como será a dinâmica da participação no curso, desse modo atenção aos combinados feitos, como, por exemplo, uso do chat, pedido de palavra, uso do microfone e câmera, etc.  </li>
        <li> Solicita-se que entre com o microfone desligado e ligue apenas no momento de fazer alguma intervenção autorizada pelo coordenador. A câmera tende a sobrecarregar a conexão, especialmente no caso dos minicursos com mais pessoas; no entanto, deixá-la ligada ou não vai variar de acordo com o ministrante e a forma que ele preferir estabelecer a dinâmica.  </li>
        <li> Caso você esteja com uma conexão instável no dia, recomendamos que você desligue sua câmera. Nas configurações da sala, no canto inferior direito, é possível selecionar a opção de não ver a imagem dos outros participantes também, mantendo somente a câmera daquele está falando no momento.  </li>
        <li> Para evitar exposições da privacidade, recomendamos que você escolha bem o local da sua participação, evitando os espaços barulhentos e com trânsito de pessoas.  </li>
        <li> Para o bom desenvolvimento das atividades, recomendamos que não usem o chat para conversas paralelas; respeitem a fala das pessoas, evitando interrupções e falas ao mesmo tempo; </li>
        <li> Se tiver algum problema e precisar sair temporariamente, avise no chat.  </li>
      </ul>
    </PageDefault>
  );
}

export default InstrucaoMinicurso;
