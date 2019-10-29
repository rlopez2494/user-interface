import React, { Component } from 'react';
import PlanchaOrgano from "./PlanchaOrgano"
import "./styles/PlanchaRegistro.css";
import "./styles/Planchas.css"
import axios from 'axios'
import planchaDetails from "../config/planchaDetails"

class PlanchaRegistro extends Component {
    
    state = {
        juntaDirectiva: {
            presidente: "",
            vicepresidente: "",
            tesorero: "",
            secretarioGeneral: "",
        },

        tribunalDisciplinario: {
            presidente: "",
            vicepresidente: "",
            secretarioGeneral: ""
        },

        juntaDirectivaDeCentro: {
            presidente: "",
            vicepresidente: "",
            tesorero: "",
            secretarioGeneral: ""
        },

        hidden: true
    }


    handleChange = (nombreOrgano, stateOrgano) => {

        const newState = {...stateOrgano};
        
        this.setState({
            [nombreOrgano]: newState
        })
    }

    toggle = () => {
        this.setState({
            hidden: !this.state.hidden
        })
    }

    handleSubmit = () => {
       
        const { hidden, ...data } = this.state
        
        axios.post('http://localhost:9000/planchas', data)
        .then((response) => {
            console.log(response)
            this.props.history.goBack()
        })
        .catch((error) => {console.log(error)})
    }

    planchaOrganos = Object.values(this.state).map((organo, index) => {

        const nombresArreglo = Object.keys(this.state)
        
        if (typeof(organo) == "object") {
            return(
                <PlanchaOrgano 
                    key={index}
                    nombre={nombresArreglo[index]}
                    puestos={organo}
                    id={index}
                    handleChange={this.handleChange}
                />
            )
        }
    })

    render() {
        return (
            <div 
                className="plancha-registro main-box"
            >

            {
                (this.state.hidden) ? 
                    null
                :
                <div 
                    className="over"
                    style={{display: (this.state.hidden) ? "none" : "block",
                            zIndex: 1,
                        }}
                    >
    
                        <div className="plancha__detalles">
    
                            <h3 className="plancha__detalles__nro-plancha">CONFIRMAR</h3>      

                            {
                   
                                planchaDetails(this.state)

                            }
                            
                            <div 
                                className="plancha-registro__botones"
                                style={{
                                    textAlign: "center"
                                }}    
                            >

                                <button 
                                    onClick={this.handleSubmit}
                                    className="Button"
                                    style={{
                                        background: "#8FCCA1"
                                    }}
                                >Confirmar y Guardar</button>

                                <button
                                    className="Button"
                                    onClick={this.toggle}
                                >Volver</button>

                            </div>
                            

                        </div>   
                    </div>
            }
                
                <div className="plancha-registro__header">
                    <h1>REGISTRO DE PLANCHA</h1>
                </div>

                {
                    this.planchaOrganos
                }

                <div className="plancha-registro__botones">

                    <button 
                        onClick={this.toggle}
                        className="Button"
                    >GUARDAR</button>

                    <button
                        className="Button"
                        onClick={() => this.props.history.goBack()}
                    >CANCELAR</button>

                </div>

            </div>
        );
    }
}

export default PlanchaRegistro;