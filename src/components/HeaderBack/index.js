import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  link: {
    height: 27,
  },
  title: {
    flexGrow: 1,
    fontSize: '0.9rem',
    fontWeight: 400,
    textDecoration: 'underline',
  },
  appBar: {
    height: 45,
  },
  toolBar: {
    minHeight: 0,
  },
}));

export default function HeaderBack( { title, backPath } ) {
  const trigger = useScrollTrigger();
  const classes = useStyles();
  title = 'VER ' + title.toUpperCase ( )

  return (
    <div className={classes.root}>
      <Slide in={!trigger}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="back">
              <Link to={backPath} className={classes.link}>
                <ArrowBackRoundedIcon />
              </Link>
            </IconButton>
              <Link to={backPath} className={classes.link}>
                <Typography variant="h6" className={classes.title}>
                  {title}
                </Typography>
              </Link>
          </Toolbar>
        </AppBar>
      </Slide>
    </div>
  );
}

