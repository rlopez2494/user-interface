import React, { Component } from 'react';
import "./styles/VerificarIdentidad.css";


class VerificarIdentidad extends Component {
    render() {
        return (
            <div id="verificar-identidad">

                <h1>CARGAR DOCUMENTO</h1>

                <div id="opciones">

                    <p>Seleccione el tipo de identificacion</p>

                    <ul>

                        <li>
                            <img src="" alt="rth"/>
                            <button>Pasaporte</button>
                        </li>

                        <li>
                            <img src="" alt="rth"/>
                            <button>Cedula de identidad</button>
                        </li>

                        <li>
                            <img src="" alt="rth"/>
                            <button>Licencia de conducir</button>
                        </li>

                    </ul>

                </div>

            </div>
        );
    }
}

export default VerificarIdentidad;