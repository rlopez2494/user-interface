import React, { Component } from 'react';
import "./styles/VerificarIdentidad.css";
import passport from "../img/verificar/passport.png";
import licencia from "../img/verificar/licencia.png";
import cedula from "../img/verificar/cedula.png";
import vacio from "../img/verificar/default.png";
import openFolder from "../img/verificar/folder-open.png";
import check from "../img/verificar/check.png";

class VerificarIdentidad extends Component {

    state = {
        stage: "main",
    }

    handleClick = (event) => {

        const { name } = event.target;

        console.log(name);

        this.setState({
            stage: name
        });

    }

    stages = () => {

        switch(this.state.stage) {

            case "main":
            return(
                <div id="main">

                    <p>Seleccione el tipo de identificacion</p>

                    <ul>

                        <li>
                            <img src={passport} alt="passport"/>

                            <button
                                name="pasaporte"
                                onClick={this.handleClick}
                                className="Button"
                            >Pasaporte</button>

                        </li>

                        <li>
                            <img src={licencia} alt="licencia"/>

                            <button
                                name="licencia"
                                onClick={this.handleClick}
                                className="Button"
                            >Licencia de conducir</button>

                        </li>

                        <li>
                            <img src={cedula} alt="cedula"/>
                            <button
                                name="cedula"
                                onClick={this.handleClick}
                                className="Button"
                            >Cedula de identidad</button>
                        </li>

                    </ul>

                </div>
            );
            
            case "pasaporte":
                return(
                    <div id="pasaporte">

                        <div id="izquierda">

                            <h3>Direccion</h3>

                            <input type="text" name="" id="" value="C:/Documents/Robert"/>

                            <button>

                                <img 
                                    src={openFolder} 
                                    alt="search" 
                                    width="20" 
                                    height="15"
                                />

                            </button>

                            <br/>

                            <button
                                name="subir"
                                onClick={this.handleClick}
                                className="Button"
                            >Subir</button>

                        </div>

                        <div id="derecha">
                            <div id="doc">
                                <img src={vacio} alt=""/>
                            </div>
                        </div>

                    </div>
                );
            
            case "subir":
                return(
                    <div id="subir">

                        <img 
                        src={check} 
                        alt="check"
                        width="150"
                        height="150"/>

                        <p>Su solicitud de verificacion fue realizado exitosamente, 
                        debe esperar de 3 a 5 dias habiles para la revision y 
                        confirmacion de este.</p>

                        <button className="Button">Volver a la pagina principal</button>
                        
                    </div>
                )
            default:
                break;
        }
    }

    render() {
        return (
            <div id="verificar-identidad">

                {
                    (this.state.stage === "subir") ? 
                        null
                    :
                        <h1 className="highlight">CARGAR DOCUMENTO</h1>
                }

                {
                    this.stages()
                }

            </div>
        );
    }
}

export default VerificarIdentidad;