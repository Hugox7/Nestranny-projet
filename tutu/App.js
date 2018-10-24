import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Merci from './Merci';
import './App.css';
import {Switch, Route} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path = "/" component={ContactForm} />
          <Route path = "/merci" component={Merci} />
        </Switch>   
      </div>
    );
  }
}

export default App;
