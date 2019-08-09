/**React imports */
import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

/*Components imports */
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import Candidatos from "./components/Candidatos"

import "./styles/Usuario.css";

class Usuario extends Component {
    state = {
        showSideBar: true
    }

    render() {

        console.log(this.state.showSideBar);
        return(
            <div id="usuario">

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
                        <Router>

                            <Route path="/" exact component={ LoginForm }/>

                            <Route path="/usuario" exact component={Candidatos} />
                            
                        </Router>

                    </div>

                    <Footer switch={ this.state.showSideBar }/>

                </div>   

            </div>
        )
    }
}

export default Usuario; 