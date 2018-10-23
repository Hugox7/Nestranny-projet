import React from 'react';
import SimpleAppBar from './composants/SImpleAppBar';
import './WebSite.css';
import Contact from './composants/Contact';
import corpo from './img/corpo.jpg';
import Missions from './composants/Missions';


const WebSite = () => {
        return (
        <div className="website">
            <SimpleAppBar /> 
            <img src={corpo} alt='corpo'className='corpo'/>
            <Missions />
            <Contact />
        </div>
            
    );   
}
export default WebSite;