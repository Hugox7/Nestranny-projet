import React from 'react';
import Missions from './Missions';
import Contact from './Contact';
import corpo from '../img/corpo.jpg'


const Home = () => {
    return(
        <div> 
            <img src={corpo} alt='corpo'className='corpo'/>
            <Missions />
            <Contact />
        </div>      
    )
}

export default Home;