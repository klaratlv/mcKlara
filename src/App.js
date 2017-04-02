import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import messenger from './messanger';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => messenger(98,0,7,9,3)}>Click</button>
      </div>
    );
  }
}

export default App;
