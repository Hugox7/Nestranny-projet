import React from 'react';
import photo from '../img/photo.png';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';


const styles = () => ({
    item:{
        textAlign:'center',
        fontSize:40,
        }
    }
    );

const About = (props) => {

    const {classes}=props;
    return (
            <Grid container justify='center'>
                <Grid item xs={3} className={classes.item}>
                    <img src={photo} alt='corpo'className='corpo'/>
                    <p>About us</p>
                </Grid>
            </Grid>
        
    )};
    export default withStyles(styles)(About);