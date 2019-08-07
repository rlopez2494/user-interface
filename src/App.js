import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom' 
import './App.css';
import Login from './pages/Login';
import Usuario from "./pages/Usuario";

function App() {

  console.log(window.location)

  return (
    <div className="App">
      <Router>

        <Route path="/" exact component={Login} />

        <Route path="/usuario" component={Usuario} />

      </Router>
    </div>
  );
}

export default App;
