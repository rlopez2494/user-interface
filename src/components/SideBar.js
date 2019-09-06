import React from "react";
import "./styles/SideBar.css";
import profilePic from "../img/profile.JPG"
import exclamacion from "../img/exclamacion.png"
import {BrowserRouter as Router, NavLink} from "react-router-dom";

function SideBar(props) {

    const { pathname } = props.location;
    const { showSideBar } = props;
    
    return(
        <div 
        id="sidebar"
        style={
            {
                display: (pathname === "/") ? "none" : null,
                left: (showSideBar) ? 0 : null
            }
        }
        >
            <div id="profile">
                <div className="wrapper">

                    <img 
                    src={ profilePic } 
                    alt="profile-pic"
                    />

                    <h4>Del Carmen Mario Casas</h4>
                    <h5>V-12345678</h5>

                </div>
            </div>


            <div id="navigation">

                <input type="text" placeholder="Buscar..."/>

                <div className="options">

                    <p>Ajustes</p>
                    <ul>

                        <li>
                            <NavLink to="/usuario/configurarPerfil">
                                <button>Configurar perfil</button>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/usuario/verificarIdentidad">
                                <button>Verificar identidad</button>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/usuario/cambioClave">
                                <button>Cambiar contraseña</button>
                            </NavLink>
                        </li>
                     
                    </ul>

                </div>

                <div className="options">

                    <p>Informacion</p>

                    <ul>

                        <li>
                            <NavLink to="/usuario/candidatos">
                                <button>Candidatos</button>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/usuario/partidos">
                                <button>Partidos</button>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/usuario/acercaDe">
                                <button>Acerca de...</button>
                            </NavLink>
                        </li>

                    </ul>

                </div>

                <div id="aviso">

                    <div id="importante">
                        <h4>IMPORTANTE</h4>
                        <img 
                        src={exclamacion} 
                        alt="hey"
                        width="30"
                        height="30"/>
                    </div>
                    
                    <p>Si no haz verificado tu cuenta no 
                    podras efectuar votos, para verificar
                    su cuenta ingrese en la opcion 
                    "Verificar Identidad" dentro de la 
                    seccion de Ajustes.</p>
                    
                </div>

            </div>
        </div>
    )
}

export default SideBar