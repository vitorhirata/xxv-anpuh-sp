import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import theme from './theme';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top'
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Inicio from './pages/Inicio';
import Contato from './pages/Contato';
import Apoio from './pages/Apoio';
import InstrucaoEncontro from './pages/InstrucaoEncontro';
import InstrucaoSeminarioTematico from './pages/InstrucaoEncontro/InstrucaoSeminarioTematico';
import InstrucaoOuvinte from './pages/InstrucaoEncontro/InstrucaoOuvinte';
import InstrucaoMinicurso from './pages/InstrucaoEncontro/InstrucaoMinicurso';
import Agenda from './pages/Programacao/Agenda';
import MesasRedondas from './pages/Programacao/MesasRedondas';
import MesasRedondasShow from './pages/Programacao/MesasRedondas/show.js';
import Conferencias from './pages/Programacao/Conferencias';
import Minicursos from './pages/Programacao/Minicursos';
import MinicursosShow from './pages/Programacao/Minicursos/show.js';
import SeminariosTematicos from './pages/Programacao/SeminariosTematicos';
import SeminariosTematicosShow from './pages/Programacao/SeminariosTematicos/show.js';
import ApresentacaoPoster from './pages/Programacao/ApresentacaoPoster';
import ApresentacaoPosterShow from './pages/Programacao/ApresentacaoPoster/show.js';
import LancamentoLivros from './pages/Programacao/LancamentoLivros';
import LancamentoLivrosShow from './pages/Programacao/LancamentoLivros/show.js';

ReactDOM.render(
  <CssBaseline >
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            <Route path="/" component={Inicio} exact />
            <Route path="/contato" component={Contato} />
            <Route path="/apoio" component={Apoio} />
            <Route path="/instrucao_encontro/instrucao_seminario_tematico" component={InstrucaoSeminarioTematico} />
            <Route path="/instrucao_encontro/instrucao_ouvinte" component={InstrucaoOuvinte} />
            <Route path="/instrucao_encontro/instrucao_minicurso" component={InstrucaoMinicurso} />
            <Route path="/instrucao_encontro" component={InstrucaoEncontro} />
            <Route path="/programacao/agenda" component={Agenda} />
            <Route path="/programacao/mesas_redondas/:id" component={MesasRedondasShow} />
            <Route path="/programacao/mesas_redondas" component={MesasRedondas} />
            <Route path="/programacao/conferencias" component={Conferencias} />
            <Route path="/programacao/minicursos/:id" component={MinicursosShow} />
            <Route path="/programacao/minicursos" component={Minicursos} />
            <Route path="/programacao/seminarios_tematicos/:id" component={SeminariosTematicosShow} />
            <Route path="/programacao/seminarios_tematicos" component={SeminariosTematicos} />
            <Route path="/programacao/apresentacao_poster/:id" component={ApresentacaoPosterShow} />
            <Route path="/programacao/apresentacao_poster" component={ApresentacaoPoster}/>
            <Route path="/programacao/lancamento_livros/:id" component={LancamentoLivrosShow} />
            <Route path="/programacao/lancamento_livros" component={LancamentoLivros} />
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </ThemeProvider>
  </CssBaseline>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
