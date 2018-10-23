import React, { Component } from 'react';
import WebSite from './WebSite';
import NestrannyLearning from './NestrannyLearning';
import { Route, Switch } from 'react-router-dom';





class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path = "/" component={WebSite} />
          <Route path = "/nestranny-learning" component={NestrannyLearning} />
        </Switch>      
      </div>
      
    );
  }
}

export default App;
