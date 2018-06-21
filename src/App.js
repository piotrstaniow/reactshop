import React, { Component } from 'react';
import './App.css';
import CategoryLayout from "./components/CategoryLayout";
import Header from "./components/Header";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <CategoryLayout/>
            </div>
        );
    }
}

export default App;
