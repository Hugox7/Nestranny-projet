    import React from 'react';
    import { TextField, Button } from '@material-ui/core';
    import './ContactForm.css';
    




    const adress = () => {
    return 'hugo.trichard@yahoo.fr'
    }
    const ContactForm = () => {
        return(
        <div className="contact-form">
            
                <form id="form" action={`//formspree.io/${adress()}`} method="POST">
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
                    <TextField
                        className="hidden-input"
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
                    <Button variant="outlined" className="button" type="submit" value="send">
                        Envoyer
                    </Button>
                </form>
            </div>
        )
    }

    export default ContactForm;

