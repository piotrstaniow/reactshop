import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CategoryLayout from "./components/CategoryLayout";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">ReactShop</h1>
                </header>
                <CategoryLayout/>
            </div>
        );
    }
}

export default App;
