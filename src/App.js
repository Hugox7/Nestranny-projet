import React, { Component } from 'react';
import './App.css';
import SimpleAppBar from './composants/Header'
import corpo from './img/corpo.jpg'
class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleAppBar />
        <img src={corpo} alt='corpo'className='corpo'/>
      </div>
    );
  }
}

export default App;
