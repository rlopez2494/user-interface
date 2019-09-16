import React from 'react';
import logo from '../img/udo-logo.png';
import "./styles/Header.css";
import Rpp from "./Rpp"

function Header(props) {

    /* Invocacion de la funcion de conteo en el header */
    Rpp()

    const { pathname } = props.location;
 
    return(
        <div 
            id="header" 
            style={{backgroundColor: (pathname !== "/") ? (null) : ("rgba( 000, 000, 000, 0.1)")}}>
            <div className="container">
                
                <div id="logo">

                    <button
                        onClick={props.handleBar}
                        name="toggleOn"
                        id="toggleOn"
                    >Sidebar</button>

                    <img 
                        src={ logo } 
                        alt="udo-logo-color"
                        width="70" 
                        height="70" 
                     />

                    <div>
                        <h1>sistema electoral electronico</h1>
                    </div>

                </div>

                <a href="">{(pathname === "/") ? "SABER MAS" : "CERRAR SESION"}</a>
            
            </div>
        </div>
    );
}

export default Header;