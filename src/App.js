import React, { Component } from 'react';
import './App.css';
import Cards from './Card.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2><b>SIMPLE CATALOG</b></h2>
        </header>
        <Cards />
      </div>
    );
  }
}

export default App;
