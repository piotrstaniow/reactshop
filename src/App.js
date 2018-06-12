import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactShop</h1>
        </header>
        <div className="category-grid">
            <div className="category-item">
                Category 1
            </div>
            <div className="category-item">
                Category 2
            </div>
            <div className="category-item">
                Category 3
            </div>
            <div className="category-item">
                Category 4
            </div>
        </div>
      </div>
    );
  }
}

export default App;
