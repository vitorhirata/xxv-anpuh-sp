import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import theme from './theme';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Inicio from './pages/Inicio';
import Contato from './pages/Contato';
import Apoio from './pages/Apoio';
import Agenda from './pages/Programacao/Agenda';
import MesasRedondas from './pages/Programacao/MesasRedondas';
import Conferencias from './pages/Programacao/Conferencias';
import Minicursos from './pages/Programacao/Minicursos';
import SeminariosTematicos from './pages/Programacao/SeminariosTematicos';
import Cartazes from './pages/Programacao/Cartazes';
import LancamentoLivros from './pages/Programacao/LancamentoLivros';


ReactDOM.render(
  <React.StrictMode>
    <CssBaseline >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Inicio} exact />
            <Route path="/contato" component={Contato} />
            <Route path="/apoio" component={Apoio} />
            <Route path="/programacao/agenda" component={Agenda} />
            <Route path="/programacao/mesas_redondas" component={MesasRedondas} />
            <Route path="/programacao/conferencias" component={Conferencias} />
            <Route path="/programacao/minicursos" component={Minicursos} />
            <Route path="/programacao/seminarios_tematicos" component={SeminariosTematicos} />
            <Route path="/programacao/cartazes" component={Cartazes} />
            <Route path="/programacao/lancamento_livros" component={LancamentoLivros} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </CssBaseline>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
