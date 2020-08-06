import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Contato from './pages/Contato';
import Agenda from './pages/Agenda';
import MesasRedondas from './pages/MesasRedondas';
import Conferencias from './pages/Conferencias';
import Minicursos from './pages/Minicursos';
import SeminariosTematicos from './pages/SeminariosTematicos';
import Cartazes from './pages/Cartazes';
import LancamentoLivros from './pages/LancamentoLivros';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Inicio} exact />
        <Route path="/contato" component={Contato} exact />
        <Route path="/programacao/agenda" component={Agenda} />
        <Route path="/programacao/mesas_redondas" component={MesasRedondas} />
        <Route path="/programacao/conferencias" component={Conferencias} />
        <Route path="/programacao/minicursos" component={Minicursos} />
        <Route path="/programacao/seminarios_tematicos" component={SeminariosTematicos} />
        <Route path="/programacao/cartazes" component={Cartazes} />
        <Route path="/programacao/lancamento_livros" component={LancamentoLivros} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
