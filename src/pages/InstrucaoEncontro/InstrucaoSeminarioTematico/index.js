import React from 'react';
import PageDefault from '../../../components/PageDefault';

function InstrucaoSeminarioTematico() {
  return(
    <PageDefault title='Instruções de Participação' backPath='/instrucao_encontro'>
      <h2>Instruções aos apresentadores de Seminários Temáticos</h2>
      <ul className='bullet-list'>
        <li> Somente os e-mails cadastrados no site do evento terão acesso às salas do Google Meet. Desse modo, acesse às salas com o e-mail cadastrado.  </li>
        <li> Para cada uma das sessões dos ST’s, uma sala diferente no Google Meet foi criada. Assim, você receberá convites no e-mail correspondentes a cada uma das sessões dos ST’s. <strong>Lembre-se de checar a caixa de spam.</strong> </li>
        <li> <strong>Não difundir os links das salas enviadas via e-mail para evitar ataques virtuais e sobrecargas de conexão.</strong> </li>
        <li> Certifique-se de acessar o link correto da sala do Google Meet para o dia daquela sessão.  </li>
        <li> <strong>Caso você não use Gmail, ao clicar no link, será requisitado que você coloque seu nome.</strong> Pedimos que você coloque <strong>seu nome por extenso, pois nomes que não constarem na lista de inscritos não serão permitidos nas salas</strong>.  </li>
        <li> A presença nos STs será controlada pelos coordenadores.  </li>
        <li> Seja pontual, em especial se não fizer o acesso com o Gmail, pois será necessário que o monitor autorize sua entrada.  </li>
        <li> No primeira sessão, o coordenador passará instruções de como será a dinâmica da participação no ST, desse modo atenção aos combinados feitos, como, por exemplo, uso do chat, pedido de palavra, uso do microfone e câmera, etc.  </li>
        <li> O tempo de fala recomendado para as apresentações é de <strong>15 minutos.</strong> Esse tempo porém pode ser diferente para alguns STs, o que será informado pelo coordenador.  </li>
        <li> <strong>Nas salas do Google Meets, é possível fazer apresentações de slides</strong>. Para isso, na parte inferior da tela, clique em <strong>Apresentar agora</strong>, escolha “<strong>apresentar apenas uma janela</strong>” e escolha a janela com sua apresentação. Deixe sua apresentação previamente aberta e feche outras aplicações e sites para evitar exposições da sua privacidade. Ao terminar sua apresentação, cancele o compartilhamento da sua tela. Caso tenha dificuldades, acesse o tutorial: <a href='https://support.google.com/meet/answer/9308856?co=GENIE.Platform%3DDesktop&hl=pt-BR' target='_blank' rel='noopener noreferrer' className='text-link' >Apresentar durante uma videochamada</a>.  </li>
        <li> <strong>Solicita-se que entre com o microfone desligado e ligue apenas no momento de fazer alguma intervenção autorizada pelo coordenador</strong>. A câmera tende a sobrecarregar a conexão, especialmente no caso dos STs com mais pessoas; no entanto, deixá-la ligada ou não vai variar de acordo com o coordenador e a forma que ele preferir estabelecer a dinâmica.  </li>
        <li> Caso você esteja com uma conexão instável no dia, recomendamos que você desligue sua câmera. Nas configurações da sala, no canto inferior direito, é possível selecionar a opção de não ver a imagem dos outros participantes também, mantendo somente a câmera daquele está falando no momento.  </li>
        <li> Para evitar exposições da privacidade, recomendamos que você escolha bem o local da sua participação, evitando os espaços barulhentos e com trânsito de pessoas.  </li>
        <li> Para o bom desenvolvimento das atividades, recomendamos que não usem o chat para conversas paralelas; respeitem a fala das pessoas, evitando interrupções e falas ao mesmo tempo.  </li>
        <li> Se tiver algum problema e precisar sair temporariamente, avise no chat.  </li>
        <li> A previsão de publicação dos anais eletrônicos e da disponibilização dos certificados é de 01 mês após o evento.</li>
      </ul>
    </PageDefault>
  );
}

export default InstrucaoSeminarioTematico;
