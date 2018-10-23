import React from 'react';
import SimpleAppBar from './composants/SImpleAppBar';
import './WebSite.css';
import ContactForm from './composants/ContactForm';
import corpo from './img/corpo.jpg';
import Missions from './composants/Missions';


const WebSite = () => {
    return (
        <div className="website">
            <SimpleAppBar /> 
            <img src={corpo} alt='corpo'className='corpo'/>
            <Missions />
            <ContactForm />
        </div>
        ); 
    }
export default WebSite;