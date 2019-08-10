import React from 'react';
import './App.css';
import Usuario from "./pages/Usuario";
import {BrowserRouter as Router} from "react-router-dom";

function App() {

  console.log(window.location)

  return (
    <Router>
      <div className="App">

        <Usuario />

      </div>
    </Router>
    
  );
}

export default App;
