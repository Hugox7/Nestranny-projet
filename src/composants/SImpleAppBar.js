import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from '../img/logo.jpeg';
import SimpleMenu from './SimpleMenu';




const styles = {
  root: {
    flexGrow: 1,
  },
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar className="app-bar" position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              <img className="logo" src={logo} alt="nestranny-logo" />
            </Typography>
            <Button color="primary" className={classes.button}>
              Primary
            </Button>
            <SimpleMenu />
            <Button color="primary" className={classes.button}>
              Primary
            </Button>
          </Toolbar>
      </AppBar>
    </div>
  );
}


SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);