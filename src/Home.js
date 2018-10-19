import React, { Component } from 'react';
import SimpleAppBar from './composants/Header'
import corpo from './img/corpo.jpg'
import MediaCard from './composants/Missions'
import Grid from '@material-ui/core/Grid';

class Home extends Component {
    render() {
        return (
        <div className="Home">
            <SimpleAppBar/> 
            <img src={corpo} alt='corpo'className='corpo'/>
            <Grid container justify="space-around">
            <MediaCard />
            <MediaCard />
            <MediaCard />
            </Grid>
            </div>
            
        );
    }
    }
export default Home;