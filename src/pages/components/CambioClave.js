import React, { Component } from 'react';
import "./styles/CambioClave.css"

class CambioClave extends Component {
    render() {
        return (
            <div id="cambio-clave">

                <h1>CAMBIAR CONTRASEÑA</h1>
                
                <div id="opciones">

                    <p>Introduzca el correo electronico con el que 
                    registro esta cuenta</p>

                    <input type="text" name="password"/>

                    <button>ENVIAR</button>

                </div>

            </div>
        );
    }
}

export default CambioClave;