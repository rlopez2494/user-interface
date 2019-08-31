import React from 'react';
import logo from '../img/udo-logo.png';
import "./styles/Header.css";

function Header(props) {

    const { pathname } = props.location;
    console.log(pathname);

    return(
        <div 
            id="header" 
            style={{backgroundColor: (pathname !== "/") ? (null) : ("rgba( 000, 000, 000, 0.1)")}}>
            <div className="container">
                
                <div id="logo">

                    <img src={ logo } alt="udo-logo-color" width="70" height="70" />

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