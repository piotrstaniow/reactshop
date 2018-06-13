import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CategoryGrid from "./components/CategoryGrid";

class App extends Component {
    render() {
        const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">ReactShop</h1>
                </header>
                <CategoryGrid categories={categories} />
            </div>
        );
    }
}

export default App;
