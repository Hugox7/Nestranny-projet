import React, { Component } from 'react';
import SimpleAppBar from './composants/SImpleAppBar';
import './WebSite.css';
import Contact from './composants/Contact';
import Home from './composants/Home';
import { Switch, Route } from 'react-router-dom';
import Footer from './composants/Footer';

class WebSite extends Component {
    render() {
        return (
        <div className="website">
            <SimpleAppBar /> 
            <Switch>
                <Route path = "/accueil" component={Home} />
                <Route path = "/contact" component={Contact} />
            </Switch>
            <Footer />

            
        </div>
            
        );
    }
    }
export default WebSite;