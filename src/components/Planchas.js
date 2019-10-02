import React, {Component} from 'react';
import Plancha from "./Plancha";
import "./styles/Planchas.css";

class Planchas extends Component{
    state = {
        hidden: false,
    }

    handleClick = (event) => {
        const { hidden } = this.state;

        this.setState({
            hidden: !hidden
        })
    }

    render() {
        return (
            <div className="planchas main-box">

                <div 
                className="over"
                style={{display: (this.state.hidden) ? "block" : "none",
                        zIndex: 1,
                    }}
                >

                    <div className="plancha__detalles">

                        <h3 className="plancha__detalles__nro-plancha">PLANCHA Nro. 4</h3>      

                        <div className="plancha__detalles__organo">

                            <div className="plancha__detalles__organo--highlight">
                                <h5>---</h5>
                                <h5>Junta Directiva Nacional</h5>
                            </div>

                            <ul className="plancha__detalles__JDN">
                                <li>
                                    <p> <em> Presidente: </em> Robert Jose Lopez Salazar (CIV Nro. 45874145) </p>
                                </li>

                                <li>
                                    <p> <em> Viceresidente: </em> Robert Jose Lopez Salazar (CIV Nro. 45874145) </p>
                                </li>

                                <li>
                                    <p> <em> Tesorero: </em> Robert Jose Lopez Salazar (CIV Nro. 45874145) </p>
                                </li>

                                <li>
                                    <p> <em> Secretario General: </em> Robert Jose Lopez Salazar (CIV Nro. 45874145) </p>
                                </li>
                            </ul>
                            
                        </div>

                        <div className="plancha__detalles__organo">

                            <div className="plancha__detalles__organo--highlight">
                                <h5>---</h5>
                                <h5>Tribunal Disciplinario</h5>
                            </div>

                            <ul className="plancha__detalles__TDN">
                                <li>
                                    <p> <em> Presidente: </em> Robert Jose Lopez Salazar (CIV Nro. 45874145) </p>
                                </li>

                                <li>
                                    <p> <em> Viceresidente: </em> Jose Javier Diaz Herdez (CIV Nro. 65469874) </p>
                                </li>

                                <li>
                                    <p> <em> Secretario General: </em> Carlos Alberto Ramos Guevara (CIV Nro. 45754185) </p>
                                </li>
                            </ul>
                            
                        </div>

                        <div className="plancha__detalles__organo">

                            <div className="plancha__detalles__organo--highlight">
                                <h5>---</h5>
                                <h5>Tribunal Disciplinario de Centro</h5>
                            </div>

                            <ul className="plancha__detalles__JDC">
                                <li>
                                    <p> <em> Presidente: </em> Robert Jose Lopez Salazar (CIV Nro. 45874145) </p>
                                </li>

                                <li>
                                    <p> <em> Viceresidente: </em> Ramon Alberto Garcia Toro (CIV Nro. 45324245) </p>
                                </li>

                                <li>
                                    <p> <em> Tesorero: </em> Luis Gustavo Alcala Prada (CIV Nro. 34534565) </p>
                                </li>

                                <li>
                                    <p> <em> Secretario General: </em> Luis Alejandro Garcia Bellomonte (CIV Nro. 1235435) </p>
                                </li>
                            </ul>

                            <div className="plancha__detalles--cerrar">
                                <button 
                                    className="Button"
                                    onClick={this.handleClick}
                                >Cerrar</button>
                            </div>
                            
                            
                        </div>
                    </div>   
                </div>
                <Plancha handleClick={this.handleClick}/>
                <Plancha handleClick={this.handleClick}/>
                <Plancha handleClick={this.handleClick}/>
                <Plancha handleClick={this.handleClick}/>
                <Plancha handleClick={this.handleClick}/>
                <Plancha 
                    handleClick={this.handleClick}
                    tipo="agregarPlancha"
                />
            </div>
        );
    }
};

export default Planchas;