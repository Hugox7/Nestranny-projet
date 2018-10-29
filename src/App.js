import React, { Component } from 'react';
import WebSite from './WebSite';
import Contact from './composants/Contact';
import NestrannyLearning from './NestrannyLearning';
import { Route, Switch } from 'react-router-dom';







class App extends Component {
  render() {
    return (
      <div className="App">
         
          <Switch>
          <Route exact path = "/" component={WebSite} />
          <Route path = "/nestranny-learning" component={NestrannyLearning} />
          <Route path = "/contact" component={Contact} />
        </Switch>                
      </div>
      
    );
  }
}

export default App;
