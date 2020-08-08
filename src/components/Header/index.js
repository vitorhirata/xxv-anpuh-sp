import React from 'react';
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
  fullList: {
    width: 'auto',
  },
  paper: {
    background: '#608097',
    color: 'white',
  }
}));

export default function Header( { title } ) {
  const classes = useStyles();
  const [state, setState] = React.useState({ left: false });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, left: open });
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button key='Inicio' component={Link} to="/">
          <ListItemText primary='Início' />
        </ListItem>

        <ListItem button key='Agenda' component={Link} to="/programacao/agenda">
          <ListItemText primary='Agenda' />
        </ListItem>

        <ListItem button key='Mesas Redondas' component={Link} to="/programacao/mesas_redondas">
          <ListItemText primary='Mesas Redondas' />
        </ListItem>

        <ListItem button key='Conferências' component={Link} to="/programacao/conferencias">
          <ListItemText primary='Conferências' />
        </ListItem>

        <ListItem button key='Minicursos' component={Link} to="/programacao/minicursos">
          <ListItemText primary='Minicursos' />
        </ListItem>

        <ListItem button key='Seminários Temáticos' component={Link} to="/programacao/seminarios_tematicos">
          <ListItemText primary='Seminários Temáticos' />
        </ListItem>

        <ListItem button key='Cartazes' component={Link} to="/programacao/cartazes">
          <ListItemText primary='Cartazes' />
        </ListItem>

        <ListItem button key='Lançamento de Livros' component={Link} to="/programacao/lancamento_livros">
          <ListItemText primary='Lançamento de Livros' />
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
      <AppBar position="static" color='primary'>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" key={'left'}>
            <MenuIcon onClick={toggleDrawer(true)} />
            <Drawer open={state['left']} onClose={toggleDrawer(false)} classes={{ paper: classes.paper }}>
              {list()}
            </Drawer>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            { title }
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

