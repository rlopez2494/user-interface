import React, { Component } from 'react';
import "./styles/CambioClave.css"

class CambioClave extends Component {

    state = {
        stage: "main"
    }

    handleClick = (event) => {
        const { name } = event.target;

        this.setState({
            stage: name
        });
    }

    stages = () => {
        switch(this.state.stage) {
            case "main":
                return(
                    <div id="opciones">

                    <p>Introduzca el correo electronico con el que 
                    registro esta cuenta</p>

                    <input type="text" name="password"/>

                    <button
                        name="enviar"
                        onClick={this.handleClick}
                    >ENVIAR</button>

                </div>
                );
            
            case "enviar":
                return(
                    <div id="enviar">

                        <div id="mensaje">
                            <p>Hemos enviado un mensaje de 
                            confirmación a la cuenta de  correo 
                            que uso para registrarse, por favor 
                            diríjase a su correo electrónico y 
                            siga las instrucciones.</p>

                            <p>Si no recibió el mensaje de click 
                            en Reenviar</p>
                        </div>

                        <div id="botones">

                            <button>REENVIAR</button>

                            <button
                                name="cambiar"
                                onClick={this.handleClick}
                            >ACEPTAR</button>

                        </div>

                    </div>
                );

            case "cambiar":
                return(
                    <div id="cambiar">

                        <p>Ingrese la nueva contraseña</p>
                        <input type="text"/>

                        <p>Repita la contraseña</p>
                        <input type="text"/>

                        <button
                            name="final"
                            onClick={this.handleClick}
                        >Enviar</button>
                    </div>
                );

            case "final":
                return(
                    <div id="final">

                        <p>
                            Su cambio de contrase;a fue realizado 
                            exitosamente, ingrese con su nueva
                            contrase;a
                        </p>

                        <button>INGRESAR</button>
                    </div>
                );
            default:
                break;
        }
    }
    render() {
        return (
            <div id="cambio-clave">

                {
                    (this.state.stage === "enviar") ?
                        <h1 className="highlight">CONFIRMAR</h1>
                    :
                        <h1 className="highlight">CAMBIAR CONTRASEÑA</h1>
                }
                
                {
                    this.stages()
                }

            </div>
        );
    }
}

export default CambioClave;