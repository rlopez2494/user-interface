/* React, React Router imports*/
import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import { withRouter } from "react-router-dom";

/*Components imports */
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import Papeleta from "./components/Papeleta";
import ConfigurarPerfil from "./components/ConfigurarPerfil";
import VerificarIdentidad from "./components/VerificarIdentidad";
import CambioClave from "./components/CambioClave";
import Partidos from "./components/Partidos";
import AcercaDe from "./components/AcercaDe";
import Planchas from "./components/Planchas";
import PlanchaRegistro from './components/PlanchaRegistro';

/* withRouter Components */
const SideBarWithRouter = withRouter(SideBar);
const HeaderWithRouter = withRouter(Header);
const FooterWithRouter = withRouter(Footer);

class App extends Component {

  state = {

    showSideBar: false
    
  }

  handleBar = (event) => {
    
    const toggle = event.target.name;

    this.setState({
      showSideBar: (toggle === "toggleOn") ? true : false 
    });

  }

  render() {
    return (
      <Router>

        <div className="App">
        
          <div 
            className="column" 
            id="left">

              <SideBarWithRouter 
                showSideBar={this.state.showSideBar} />

          </div>
  
          <div 
            className="column" 
            id="right">

            {
              (this.state.showSideBar) ?

              <div id="overlay" onClick={this.handleBar}></div>

              :

              null
            }
            
              <HeaderWithRouter handleBar={this.handleBar} />
  
              <div id="main-section">
  
                      <Route path="/" exact component={ LoginForm }/>
  
                      <Route path="/usuario" exact component={ Papeleta } />
  
                      <Route path="/usuario/configurarPerfil" component={ ConfigurarPerfil } />
  
                      <Route path="/usuario/verificarIdentidad" component={ VerificarIdentidad } />
  
                      <Route path="/usuario/cambioClave" component={ CambioClave } />
  
                      {/* <Route path="/usuario/candidatos" component={ Candidatos } /> */}
  
                      <Route path="/usuario/partidos" component={ Partidos } />
  
                      <Route path="/usuario/acercaDe" component={ AcercaDe } />
                      
                      <Route path="/admin" exact component={ LoginForm }/>

                      <Route path="/admin/:admin_id" exact component={ Planchas }/>

                      <Route path="/admin/:admin_id/planchaRegistro" exact component={ PlanchaRegistro }/>


              </div>
  
              <FooterWithRouter/>
  
          </div>   
  
        </div>

      </Router>
    );
  }
}

export default App;
