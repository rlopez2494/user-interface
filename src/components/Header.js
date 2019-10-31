import React from 'react';
import logo from '../img/udo-logo.png';
import "./styles/Header.css";
import { BrowserRouter as  Router, Link } from "react-router-dom"

function Header(props) {

    /* Invocacion de la funcion de conteo en el header */
    const { pathname } = props.location;
 
    return(
        <div 
            id="header" 
            style={
                {
                    backgroundColor: (pathname !== "/") ? 

                    (pathname !== "/admin")? 
                    (null) : "rgba(0, 49, 75, 0.73)"  

                    : 

                    ("rgba( 000, 000, 000, 0.1)")}}>

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

                {
                    (pathname === "/") ? 
                        <Link to="/admin">ADMIN</Link> 
                        : 
                        (pathname === "/admin") ?
                        <Link to="/">VOTANTE</Link> 
                        :
                        <Link to="/">CERRAR SESION</Link>
     
                }
            
            </div>
        </div>
    );
}

export default Header;