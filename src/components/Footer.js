import React from 'react';
import "./styles/Footer.css";

function Footer(props) {

    const { pathname } = props.location;
    console.log(pathname)

    return(
        <div style={{display: (pathname !== "/") ? ("none") : ("flex")}} id="footer">

            <div className="container">

                <p id="udo-nombre">UNIVERSIDAD DE ORIENTE NÚCLEO MONAGAS</p>
                
                <p id="realizado-por">REALIZADO POR: BR. LÓPEZ, ROBERT Y BR. CAIGUA, LEURISÉ</p>

            </div>
            
        </div>
    );
}

export default Footer