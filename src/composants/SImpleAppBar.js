import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from '../img/logo12.png';
import SimpleMenu from './SimpleMenu';
import { Link } from 'react-router-dom'; 
import {Grid} from '@material-ui/core';


const styles = {
  root: {
    flexGrow: 1,
  },
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (

    
    <Grid className={classes.root}>
      <AppBar className="app-bar" position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              <img className="logo" src={logo} alt="nestranny-logo" />
            </Typography>
            <SimpleMenu />
            <Button color="primary" className={classes.button}>
              <Link to = "/nestranny-learning">Nestranny Learning</Link>
            </Button>
            <Button color="primary" className={classes.button}>
              <Link to = "/contact">contact</Link>
            </Button>
          </Toolbar>
      </AppBar>
      <Grid item className={classes.photo}>
      
      </Grid>
    </Grid>
  );
}


SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);