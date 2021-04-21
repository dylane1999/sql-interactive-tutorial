import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {NavLink} from "react-router-dom"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    button:{
        color: "white",
        textDecoration: "none",
    }
  }),
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Interactive SQL Tutorial
          </Typography>
          <NavLink to="/"> <Button className={classes.button} color="default">Learn</Button></NavLink>
          <NavLink to="/practice"> <Button className={classes.button}  color="secondary">Practice</Button></NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}
