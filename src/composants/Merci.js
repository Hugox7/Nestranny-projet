import React from 'react';
import './Merci.css';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


const Merci = () => {
    return(
        <div className="merci">
            <p>Merci pour votre message, nous reviendrons vers vous rapidement !</p>
            <Button variant="outlined" className="button1" type="submit" value="send">
                <Link className="link" to="/">Retour à l'accueil</Link>
            </Button>
        </div>
    )
}

export default Merci;