import React from 'react';
import './Missions.css';
import MediaCard from './MediaCard';
import { TrashList }  from './TrashList';

const Missions = () => {
    const card = TrashList.map((elem, index) => {
        return (
            <MediaCard
                key={index}
                title={elem.title}
                text1={elem.text1}
                text2={elem.text2}
                text3={elem.text3}
                img={elem.img}
            />
        )
    })

    return(
        <div className = "card-list">
            {card}
        </div>
    )
}

export default Missions;