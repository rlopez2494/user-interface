import React, {Component} from "react";
import vacio from "../img/plancha-foto.png"
import planchaDetails from "../config/planchaDetails"

class Plancha extends Component{

    state = {
        hidden: false,
    }

    toggleDetails = (event) => {
        const { hidden } = this.state;

        this.setState({
            hidden: !hidden
        })
    }

    history = this.props.routeProps.history

    pathname = this.props.routeProps.location.pathname

    agregarPlancha = () => {
        this.history.push(`${this.pathname}/planchaRegistro`)
    }
    
    render() {
         
        return(
            <div 
                className="plancha"
                style={
                    {
                        position: (this.props.tipo) ? "relative" : "static",
                        overflow: (this.props.tipo) ? "hidden" : "visible",
                        zIndex: (this.props.tipo) ? "0" : null,
                    }}
            >
    
            {
                (this.props.tipo) ? 
                    null
                :
                <div 
                    className="over"
                    style={{display: (this.state.hidden) ? "block" : "none",
                            zIndex: 1,
                        }}
                    >
    
                        <div className="plancha__detalles">
    
                            <h3 className="plancha__detalles__nro-plancha">PLANCHA Nro. 4</h3>      

                            {
                                this.props.data ?
                                planchaDetails(this.props.data)
                                    :
                                null
                            }
                            
  
                            <button 
                                className="Button"
                                style={{
                                    position: "fixed",
                                    bottom: 0,
                                    right: 0
                                }}
                                onClick={this.toggleDetails}
                            >Cerrar
                            </button>
                                               

                        </div>   
                    </div>
            }
                
                <div 
                    className="plancha--agregar"
                    style={{display: (this.props.tipo) ? "block" : "none"}}
                    onClick={this.agregarPlancha}
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
                        onClick={this.toggleDetails}
                    />
                </div>
            </div>
        )
    }
}

export default Plancha