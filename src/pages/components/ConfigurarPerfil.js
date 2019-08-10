import React, { Component } from 'react';
import "./styles/ConfigurarPerfil.css"
import profilePic from "../../img/profile.JPG"

class configurarPerfil extends Component {
    render() {
        return (
            <div id="perfil-config">

                <div id="wrapper">
                    <div id="persona">

                        <div id="cambio-foto">

                            <div>
                                <h4>Foto de perfil</h4>
                                <img src={ profilePic } alt="profilePic"/>
                                <button>Eliminar foto</button>
                            </div>

                            <div id="cambiar">

                                <h5>Direccion</h5>

                                <input name="updateImg" type="text" placeholder="src link"/>

                                <button>Subir</button>

                            </div>

                        </div>

                        <div id="datos">

                                <div className="field">
                                    <label htmlFor="nombre">Nombre</label>
                                    <input name="nombre" type="text" placeholder="Mario Casas" disabled/>
                                </div>

                                <div className="field">
                                    <label htmlFor="cedula">Cedula</label>
                                    <input name="cedula" type="text" placeholder="Mario Casas" disabled/>
                                </div>

                                <div className="field">
                                    <label htmlFor="apellido">Apellido</label>
                                    <input name="apellido" type="text" placeholder="Mario Casas" disabled/>
                                </div>

                                <div className="field">
                                    <label htmlFor="llave-publica">Llave publica</label>
                                    <input name="llavePublica" type="text" placeholder="Mario Casas" disabled/>
                                </div>

                        </div>

                    </div>

                    <div id="direccion">

                    <h1>DIRECCION DE DOMICILIO</h1>

                    <div id="mid">

                        <div id="selects">

                            <div id="pais">

                            <div className="field">
                                <label htmlFor="pais">Pais</label>
                                <select name="pais" id=""></select>
                            </div>

                            <div className="field">
                                <label htmlFor="estado">Estado</label>
                                <select name="estado" id=""></select>
                            </div>

                            <div className="field">
                                <label htmlFor="ciudad">Ciudad</label>
                                <select name="ciudad" id=""></select>
                            </div>

                            <div className="field">
                                <label htmlFor="municipio">Municipio</label>
                                <select name="municipio" id=""></select>
                            </div>

                            <div className="field">
                                <label htmlFor="parroquia">Parroquia</label>
                                <select name="parroquia" id=""></select>
                            </div>

                            </div>

                        </div>

                        <div id="campos">

                            <div className="field">
                                <label htmlFor="urbanizacion">Urbanizacion</label>
                                <input name="urbanizacion" type="text"/>
                            </div>

                            <div className="field">
                                <label htmlFor="calle">Calle</label>
                                <input name="calle" type="text"/>
                            </div>

                            <div className="field">
                                <label htmlFor="casa">Casa</label>
                                <input name="casa" type="text"/>
                            </div>

                            <div className="field">
                                <label htmlFor="mas-detalles">Mas Detalles (opcional)</label>
                                <input name="mas-detalles" type="text"/>
                            </div>

                        </div>
                        
                    </div>

                    <div id="guardar">

                        <button>Guardar Cambios</button>

                    </div>

                </div>

                </div>

            </div>
        );
    }
}

export default configurarPerfil;