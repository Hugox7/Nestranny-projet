import React, { Component } from 'react';
import SimpleAppBar from './composants/SImpleAppBar';
import corpo from './img/corpo.jpg'
import Grid from '@material-ui/core/Grid';
import './Home.css';
import Missions from './composants/Missions';

class Home extends Component {
    render() {
        return (
        <div className="Home">
            <SimpleAppBar/> 
            <img src={corpo} alt='corpo'className='corpo'/>
            <Grid container justify="space-around">
            <Missions />
            </Grid>
            </div>
            
        );
    }
    }
export default Home;