import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

/*Components imports */
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import Candidatos from "./components/Candidatos";
import Voto from "./components/Voto";
import ConfigurarPerfil from "./components/ConfigurarPerfil";
import VerificarIdentidad from "./components/VerificarIdentidad";
import CambioClave from "./components/CambioClave";
import Partidos from "./components/Partidos";
import AcercaDe from "./components/AcercaDe";

class App extends Component {

  state = {
    showSideBar: true
  }

  render() {
    return (
      <Router>

        <div className="App">
  
          {
              (this.state.showSideBar) ? 
  
              (
                  <div className="column" id="left">
                      <SideBar />
                  </div>
              ) :
              
              (
                  null
              )
          }
          
  
          <div className="column" id="right">
  
              <Header switch={ this.state.showSideBar } />
  
              <div id="main-section">
  
                      <Route path="/" exact component={ LoginForm }/>
  
                      <Route path="/usuario" exact component={Candidatos} />
  
                      <Route path="/usuario/votar" component={ Voto } />
  
                      <Route path="/usuario/configurarPerfil" component={ ConfigurarPerfil } />
  
                      <Route path="/usuario/verificarIdentidad" component={ VerificarIdentidad } />
  
                      <Route path="/usuario/cambioClave" component={ CambioClave } />
  
                      <Route path="/usuario/candidatos" component={ Candidatos } />
  
                      <Route path="/usuario/partidos" component={ Partidos } />
  
                      <Route path="/usuario/acercaDe" component={ AcercaDe } />
                      
              </div>
  
              <Footer switch={ this.state.showSideBar }/>
  
          </div>   
  
        </div>

      </Router>
    );
  }
}

export default App;
