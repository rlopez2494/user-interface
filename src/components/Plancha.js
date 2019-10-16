import React, {Component} from "react";
import vacio from "../img/plancha-foto.png"

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
        console.log("hey")
        this.history.push(`${this.pathname}/planchaRegistro`)
    }

    juntaDirectiva = (data) => {
        console.log(data)
        const {presidente, secretarioGeneral, tesorero, vicepresidente} = data
        return(
        <div className="plancha__detalles__organo">
        
            <div className="plancha__detalles__organo--highlight">
                <h5>---</h5>
                <h5>Junta Directiva Nacional</h5>
            </div>

            <ul className="plancha__detalles__JDN">
                <li>
                    <p> <em> Presidente: </em> {presidente} (CIV Nro. 45874145) </p>
                </li>

                <li>
                    <p> <em> Vicepresidente: </em> {vicepresidente} (CIV Nro. 45874145) </p>
                </li>

                <li>
                    <p> <em> Tesorero: </em> {tesorero} (CIV Nro. 45874145) </p>
                </li>

                <li>
                    <p> <em> Secretario General: </em> {secretarioGeneral} (CIV Nro. 45874145) </p>
                </li>
            </ul>
    
        </div>
        )
    }

    tribunalDisciplinario = (data) => {
        const {presidente, vicepresidente, secretarioGeneral} = data

        return(
            <div className="plancha__detalles__organo">
    
                <div className="plancha__detalles__organo--highlight">
                    <h5>---</h5>
                    <h5>Tribunal Disciplinario</h5>
                </div>

                <ul className="plancha__detalles__TDN">
                    <li>
                        <p> <em> Presidente: </em> {presidente} (CIV Nro. 45874145) </p>
                    </li>

                    <li>
                        <p> <em> Vicepresidente: </em> {vicepresidente} (CIV Nro. 65469874) </p>
                    </li>

                    <li>
                        <p> <em> Secretario General: </em> {secretarioGeneral} (CIV Nro. 45754185) </p>
                    </li>
                </ul>
                
            </div>
        )
    }

    juntaDirectivaDeCentro = (data) => {
        const { presidente, vicepresidente, tesorero, secretarioGeneral} = data
        return(
            <div className="plancha__detalles__organo">

                <div className="plancha__detalles__organo--highlight">
                    <h5>---</h5>
                    <h5>Tribunal Disciplinario de Centro</h5>
                </div>

                <ul className="plancha__detalles__JDC">
                    <li>
                        <p> <em> Presidente: </em> {presidente} (CIV Nro. 45874145) </p>
                    </li>

                    <li>
                        <p> <em> Viceresidente: </em> {vicepresidente} (CIV Nro. 45324245) </p>
                    </li>

                    <li>
                        <p> <em> Tesorero: </em> {tesorero} (CIV Nro. 34534565) </p>
                    </li>

                    <li>
                        <p> <em> Secretario General: </em> {secretarioGeneral} (CIV Nro. 1235435) </p>
                    </li>
                </ul>

                <div className="plancha__detalles--cerrar">
                    <button 
                        className="Button"
                        onClick={this.toggleDetails}
                    >Cerrar</button>
                </div>
                     
            </div>
        )
    }
    
    render() {
        console.log(this.props.id)
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
                                (this.props.data) ?
                                this.juntaDirectiva(this.props.data.juntaDirectiva)
                                :
                                null
                            }
                            
                            {
                                (this.props.data) ?
                                this.tribunalDisciplinario(this.props.data.tribunalDisciplinario)
                                :
                                null
                            }

                            {
                                (this.props.data) ? 
                                this.juntaDirectivaDeCentro(this.props.data.juntaDirectivaDeCentro)
                                :
                                null
                            }                      

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