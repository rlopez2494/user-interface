import React, { Component } from 'react';
import "./styles/VerificarIdentidad.css";
import passport from "../img/verificar/passport.png";
import licencia from "../img/verificar/licencia.png";
import cedula from "../img/verificar/cedula.png";

class VerificarIdentidad extends Component {
    render() {
        return (
            <div id="verificar-identidad">

                <h1>CARGAR DOCUMENTO</h1>

                <div id="opciones">

                    <p>Seleccione el tipo de identificacion</p>

                    <ul>

                        <li>
                            <img src={passport} alt="passport"/>
                            <button>Pasaporte</button>
                        </li>

                        <li>
                            <img src={licencia} alt="licencia"/>
                            <button>Cedula de identidad</button>
                        </li>

                        <li>
                            <img src={cedula} alt="cedula"/>
                            <button>Licencia de conducir</button>
                        </li>

                    </ul>

                </div>

            </div>
        );
    }
}

export default VerificarIdentidad;