import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

const H1 = styled.h1`
    font-weight: 300;
    font-size: 24px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    margin: 15px 0px 0px 0px;
    padding: 15px 16px 0px 16px;
`;

const H2 = styled.h2`
    font-weight: 700;
    font-size: 16px;
    font-family: "Jennifer", "Roboto", "Helvetica", "Arial", sans-serif;
    margin: 0px 0px 15px 0px;
    padding: 0px 16px;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
  listComponent: {
    position: 'relative',
    top: '-25px',
  },
  fullList: {
    width: 'auto',
  },
  paper: {
    background: '#608097',
    color: 'white',
  },
  menuTitle: {
    color: 'black',
    background: '#F4B303',
    position: "relative",
    top: '-16px',
    height: '150px',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));


export default function Header( { title } ) {
  const classes = useStyles();
  const baseItem = ["Início", "Instruções do Encontro", "Contato", "Apoio"];
  const isBaseItem = baseItem.includes(title);
  const [state, setState] = React.useState(false);
  const [open, setOpen] = React.useState(isBaseItem ? false : true);
  const trigger = useScrollTrigger();

  const toggleDrawer = (input) => (event) => { setState(input); };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
    >
      <div className={classes.menuTitle}>
        <H1>
          XXV Encontro Estadual de História da ANPUH-SP
        </H1>
        <H2>
          História, desigualdades e diferenças
        </H2>
      </div>
      <List className={classes.listComponent}>
        <ListItem button key='Inicio' component={Link} to="/">
          <ListItemText primary='Início' />
        </ListItem>

        <ListItem button onClick={() => { setOpen(!open);}}>
          <ListItemText primary='Programação' />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            <ListItem button key='Agenda' className={classes.nested} component={Link} to="/programacao/agenda">
              <ListItemText primary='Agenda' />
            </ListItem>

            <ListItem button key='Mesas Redondas' className={classes.nested} component={Link} to="/programacao/mesas_redondas">
              <ListItemText primary='Mesas Redondas' />
            </ListItem>

            <ListItem button key='Conferências' className={classes.nested} component={Link} to="/programacao/conferencias">
              <ListItemText primary='Conferências' />
            </ListItem>

            <ListItem button key='Minicursos' className={classes.nested} component={Link} to="/programacao/minicursos">
              <ListItemText primary='Minicursos' />
            </ListItem>

            <ListItem button key='Seminários Temáticos' className={classes.nested} component={Link} to="/programacao/seminarios_tematicos">
              <ListItemText primary='Seminários Temáticos' />
            </ListItem>

            <ListItem button key='Apresentação de pôster' className={classes.nested} component={Link} to="/programacao/apresentacao_poster">
              <ListItemText primary='Apresentação de pôster' />
            </ListItem>

            <ListItem button key='Lançamento de Livros' className={classes.nested} component={Link} to="/programacao/lancamento_livros">
              <ListItemText primary='Lançamento de Livros' />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button key='Instruções do Encontro' component={Link} to="/instrucao_encontro">
          <ListItemText primary='Instruções do Encontro' />
        </ListItem>

        <ListItem button key='Contato' component={Link} to="/contato">
          <ListItemText primary='Contato' />
        </ListItem>

        <ListItem button key='Apoio' component={Link} to="/apoio">
          <ListItemText primary='Apoio' />
        </ListItem>

      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <Slide in={!trigger}>
        <AppBar position="fixed" color='primary'>
          <Toolbar>
            <IconButton onClick={toggleDrawer(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              { title }
            </Typography>
          </Toolbar>
          <Drawer open={state} onClose={toggleDrawer(false)} classes={{ paper: classes.paper }}>
            {list()}
          </Drawer>
        </AppBar>
      </Slide>
    </div>
  );
}

