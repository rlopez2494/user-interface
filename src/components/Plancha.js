import React from "react";
import vacio from "../img/plancha-foto.png"

function Plancha(props) {
    console.log(props)

    const handleClick = () => {
        console.log("hey")
    }
    
    return(
        <div 
            className="plancha"
            style={
                {
                    position: (props.tipo) ? "relative" : "static",
                    overflow: (props.tipo) ? "hidden" : "visible",
                    zIndex: (props.tipo) ? "0" : null,
                }}
        >
            
            <div 
                className="plancha--agregar"
                style={{display: (props.tipo) ? "block" : "none"}}
                onClick={handleClick}
            >
                <div className="plancha--agregar__container">

                    <div className="plus-sign">
                        <h1>+</h1>
                    </div>

                    <h1>Agregar plancha</h1>

                </div>

            </div>

            <div className="plancha__arriba">

                <div className="plancha__foto">
                    <img 
                        src={vacio} 
                        alt="perfil" 
                        className="plancha__foto--ver"
                        width="50"
                        height="50"
                    /> 
                </div>
                
                <ul className="plancha__organos">
                
                    <li className="plancha__organo">
                        <h5>Junta Directiva</h5>
                        <div className="plancha__organo--disponible"></div>
                    </li>

                    <li className="plancha__organo">
                        <h5>Tribunal Disciplinario</h5>
                        <div className="plancha__organo--disponible"></div>
                    </li>

                    <li className="plancha__organo">
                        <h5>Asamblea Nacional</h5>
                        <div className="plancha__organo--disponible"></div>
                    </li>

                    <li className="plancha__organo">
                        <h5>Junta Directiva de Centro</h5>
                        <div className="plancha__organo--disponible"></div>
                    </li>

                    <li className="plancha__organo">
                        <h5>Asamblea de Centro</h5>
                        <div className="plancha__organo--disponible"></div>
                    </li>

                </ul>
                   
            </div>
            <div className="plancha__abajo">
                <h2 className="plancha__presentacion">PLANCHA Nro.</h2>
                <input 
                    className="plancha--ver" 
                    type="button" 
                    value="Ver..."
                    onClick={props.handleClick}
                />
            </div>
        </div>
    )
}

export default Plancha