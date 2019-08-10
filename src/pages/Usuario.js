/**React imports */
import React, { Component } from "react";
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

import "./styles/Usuario.css";

class Usuario extends Component {
    state = {
        showSideBar: true
    }

    render() {

        console.log(this.state.showSideBar);
        return(
            
                <div id="usuario">
                <Router>
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
                                
                        </div>

                        <Footer switch={ this.state.showSideBar }/>

                    </div>   
                </Router>
                </div>
        )
    }
}

export default Usuario; 