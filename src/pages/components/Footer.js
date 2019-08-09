import React from 'react';
import "./styles/Footer.css";

function Footer(props) {
    console.log(props);
    return(
        <div style={{display: (props.switch) ? ("none") : ("flex")}} id="footer">

            <div className="container">

                <p id="udo-nombre">UNIVERSIDAD DE ORIENTE NÚCLEO MONAGAS</p>
                
                <p id="realizado-por">REALIZADO POR: BR. LÓPEZ, ROBERT Y BR. CAIGUA, LEURISÉ</p>

            </div>
            
        </div>
    );
}

export default Footer