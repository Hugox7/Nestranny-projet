    import React from 'react';
    import { TextField, Button } from '@material-ui/core';
    import './ContactForm.css';
    import { withStyles } from '@material-ui/core/styles';
    import {Grid} from '@material-ui/core';
    import PropTypes from 'prop-types';




    const adress = () => {
    return 'hugo.trichard@yahoo.fr'
    }
    const styles = () => ({
        button:{
            background: 'linear-gradient(45deg,#490303 30%, #FF8E53 90%)',
            borderRadius: 60,
            color: 'white',
            height: 68,
            padding: '0 30px',
            marginBottom:36,
        },
        hiddenInput:{
            background: 'linear-gradient(45deg,#490303 30%, #FF8E53 90%)',
            borderRadius: 60,
            color: 'white',
            height: 68,
            padding: '0 30px',
            marginBottom:36,
        
        },
        hiddenInput2:{
            background: 'linear-gradient(45deg,#490303 30%, #FF8E53 90%)',
            borderRadius: 60,
            color: 'white',
            height: 68,
            padding: '0 30px',
            marginBottom:36,  
        }
    
        })



    const ContactForm =(props)=>{
        const { classes } = props;
        return(
        
        <Grid container justify="center" className={classes.container} >
                <form id="form" action={`//formspree.io/${adress()}`} method="POST">
                    <TextField
                        id="standard-with-placeholder"
                        label="Votre adresse mail"
                        placeholder="Votre adresse mail..."
                        className={classes.hiddenInput2}
                        margin="normal"
                        type="email"
                        name="_replyto"
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Votre message"
                        multiline
                        rows="10"
                        placeholder="Votre message..."
                        className="text-field"
                        margin="normal"
                        variant="outlined"
                        name="message"
                    />
                    <TextField
                        className={classes.hiddenInput}
                        type="text" 
                        name="_gotcha" 
                    />
                    <TextField 
                        className="hidden-input" 
                        type="hidden" 
                        name="_subject" 
                        value="Website contact" 
                    />
                    <TextField 
                        className="hidden-input" 
                        type="hidden" 
                        name="_next" 
                        value="/merci"
                    />
                    <Button variant="outlined" className={classes.button} type="submit" value="send">
                        Envoyer
                    </Button>
                </form>
            </Grid>
        )
        
    }
    ContactForm.propTypes = {
        classes: PropTypes.object.isRequired,}

    export default withStyles(styles)(ContactForm);

