import React from 'react';
import ContactForm from './ContactForm';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import './Contact.css';
//import SimpleAppBar from './SImpleAppBar';
import './SimpleAppBar.css';


const Contact = () => {
    return(
        <div className="contact">
            {/* <SimpleAppBar /> */}
            <ContactForm />
            <Button variant="contained"><Link to="/">Retour à l'accueil</Link></Button>
        </div>
    )
}

export default Contact;
