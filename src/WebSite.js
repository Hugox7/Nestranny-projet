import React from 'react';
import SimpleAppBar from './composants/SImpleAppBar';
import Missions from './composants/Missions';
import './WebSite.css';
import './composants/SimpleAppBar.css';



const WebSite = () => {

    return (
        <div className="website">
            <SimpleAppBar /> 
            <Missions />
            
            
        </div>
        ); 
    }
    
export default WebSite;