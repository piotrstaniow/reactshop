import React, { Component } from 'react';
import './App.css';
import CategoryLayout from "./components/CategoryLayout";
import Header from "./components/Header";
import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <Route path="/" component={CategoryLayout}/> {/* Matches path beginning with `/` */}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
