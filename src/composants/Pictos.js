import React from 'react';
import { Grid } from '@material-ui/core';
import Hand from '@material-ui/icons/PanTool';
import Jumelle from '@material-ui/icons/Voicemail';
import Phone from '@material-ui/icons/Phone';
import Contacts from '@material-ui/icons/ImportContacts';
import Arobase from '@material-ui/icons/AlternateEmail';
import { withStyles } from '@material-ui/core/styles';


const styles = () => ({
    pictos:{
    background:'rgba(158, 232, 243, 0.3)',
    },
    Item:{
    marginTop:50,
    },
    icons:{
            color: '#007e39',
            fontSize: 50,
        },
    containerA:{
            marginTop:40,
            textAlign: 'center',
        },
    containerB:{
        marginTop:100,
        textAlign: 'center',
    }
})
const Pictos = (props) => {
    const {classes}=props;
        return (
            <div className={classes.pictos}>
                <Grid container justify="space-around" className={classes.containerA}>
                    <Grid item xs={3} justify='center' className={classes.Item}>
                        <Hand  className={classes.icons}/>
                        <h2>Nos competences</h2>
                        <p>Blabla  balablalbala blablabl bla bl blaa b! Blabla  balablalbala blablabl bla bl blaa b!
                        Blabla  balablalbala blablabl bla bl blaa b!
                        Blabla  balablalbala blablabl bla bl blaa b!Blabla  balablalbala blablabl bla bl blaa b!
                        Blabla  balablalbala blablabl bla bl blaa b!<br/>
                        Blabla  balablalbala blablabl bla bl blaa b!Blabla  balablalbala blablabl bla bl blaa b!Blabla 
                        balablalbala blablabl bla bl blaa b!Blabla  balablalbala blablabl bla bl blaa b!
                        </p>
                    </Grid>
                    <Grid item xs={3} alignItems='center' className={classes.Item}>
                        <Jumelle className={classes.icons}/>
                        <h2>Nos competences</h2>
                        <p>Blabla  balablalbala blablabl bla bl blaa b! Blabla  balablalbala blablabl bla bl blaa b!
                        Blabla  balablalbala blablabl bla bl blaa b!
                        Blabla  balablalbala blablabl bla bl blaa b!Blabla  balablalbala blablabl bla bl blaa b!
                        Blabla  balablalbala blablabl bla bl blaa b!<br/>
                        Blabla  balablalbala blablabl bla bl blaa b!Blabla  balablalbala blablabl bla bl blaa b!Blabla 
                        balablalbala blablabl bla bl blaa b!Blabla  balablalbala blablabl bla bl blaa b!
                        </p>
                    </Grid>
                    <Grid item xs={3} className={classes.Item}>
                        <Phone   className={classes.icons}/>
                        <h2>Nos competences</h2>
                        <p>Blabla  balablalbala blablabl bla bl blaa b! Blabla  balablalbala blablabl bla bl blaa b!
                        Blabla  balablalbala blablabl bla bl blaa b!
                        Blabla  balablalbala blablabl bla bl blaa b!Blabla  balablalbala blablabl bla bl blaa b!
                        Blabla  balablalbala blablabl bla bl blaa b!<br/>
                        Blabla  balablalbala blablabl bla bl blaa b!Blabla  balablalbala blablabl bla bl blaa b!Blabla 
                        balablalbala blablabl bla bl blaa b!Blabla  balablalbala blablabl bla bl blaa b!
                        </p>
                        </Grid>
                    </Grid>
                    <Grid container justify="space-around" className={classes.containerB}>
                    <Grid item xs={4} justify='center'>
                        <Contacts  className={classes.icons}/>
                        <h2>Nos competences</h2>
                        <p>Blabla  balablalbala blablabl bla bl blaa b! Blabla  balablalbala blablabl bla bl blaa b!
                        Blabla  balablalbala blablabl bla bl blaa b!
                        Blabla  balablalbala blablabl bla bl blaa b!Blabla  balablalbala blablabl bla bl blaa b!
                        Blabla  balablalbala blablabl bla bl blaa b!<br/>
                        Blabla  balablalbala blablabl bla bl blaa b!Blabla  balablalbala blablabl bla bl blaa b!Blabla 
                        balablalbala blablabl bla bl blaa b!Blabla  balablalbala blablabl bla bl blaa b!
                        </p>
                    </Grid>
                    <Grid item xs={4} alignItems='center'>
                        <Arobase className={classes.icons}/>
                        <h2>Nos competences</h2>
                        <p>Blabla  balablalbala blablabl bla bl blaa b! Blabla  balablalbala blablabl bla bl blaa b!
                        Blabla  balablalbala blablabl bla bl blaa b!
                        Blabla  balablalbala blablabl bla bl blaa b!Blabla  balablalbala blablabl bla bl blaa b!
                        Blabla  balablalbala blablabl bla bl blaa b!<br/>
                        Blabla  balablalbala blablabl bla bl blaa b!Blabla  balablalbala blablabl bla bl blaa b!Blabla 
                        balablalbala blablabl bla bl blaa b!Blabla  balablalbala blablabl bla bl blaa b!
                        </p>
                    </Grid>
                </Grid>
            
            </div>
    );
}


export default withStyles(styles)(Pictos);