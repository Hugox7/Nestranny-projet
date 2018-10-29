import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Merci from './Merci';
import './Contact.css';
import {Switch, Route} from 'react-router-dom'


    class Contact extends Component {
    render() {
        return (
        
            <Switch>
            <Route exact path = "/" component={ContactForm} />
            <Route path = "/merci" component={Merci} />
            </Switch>   
        
        );
    }
    }

    export default Contact;