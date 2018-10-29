import React from 'react';
import SimpleAppBar from './composants/SImpleAppBar';
import './WebSite.css';
import Missions from './composants/Missions';
import Pictos from './composants/Pictos';
import Footer from './composants/Footer';
import About from './composants/About';
import Bandeau from './composants/Bandeau';



const WebSite = () => {
    return (
        <div className="website">
            <SimpleAppBar /> 
            <Bandeau/>
            <Missions />
            <Pictos/>
            <About/>
            <Footer/>
        </div>
        ); 
    }
export default WebSite;