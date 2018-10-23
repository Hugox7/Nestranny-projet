import React from 'react';
import { TextField, Button } from '@material-ui/core';
import './ContactForm.css';

class ContactForm extends React.Component {
    render(){
        return( 
            <form id="contact-form" action="//formspree.io/hugo.trichard@gmail.com" method="POST">
            <TextField
                id="standard-with-placeholder"
                label="Votre adresse mail"
                placeholder="Votre adresse mail..."
                className="text-field"
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
            <Button variant="outlined" className="button" type="submit" value="send">
                Envoyer
            </Button>
            
        </form>
        )
    }
}

export default ContactForm;