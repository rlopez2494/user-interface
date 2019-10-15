import React, { Component } from 'react';
import PlanchaOrgano from "./PlanchaOrgano"
import "./styles/PlanchaRegistro.css";
import axios from 'axios'

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
        }
    }


    handleChange = (nombreOrgano, stateOrgano) => {

        const newState = {...stateOrgano};
        
        this.setState({
            [nombreOrgano]: newState
        })
    }

    handleSubmit = () => {
        console.log(this.state)
        axios.post('http://localhost:9000/planchas', this.state)
        .then((response) => {console.log(response)})
        .catch((error) => {console.log(error)})
    }

    planchaOrganos = Object.values(this.state).map((organo, index) => {
        const nombresArreglo = Object.keys(this.state)
        return(
            <PlanchaOrgano 
                nombre={nombresArreglo[index]}
                puestos={organo}
                id={index}
                handleChange={this.handleChange}
            />
        )
    })

    render() {
        return (
            <div 
                className="plancha-registro main-box"
            >
                
                <div className="plancha-registro__header">
                    <h1>REGISTRO DE PLANCHA</h1>
                </div>

                {
                    this.planchaOrganos
                }

                <div className="plancha-registro__botones">

                    <button onClick={this.handleSubmit}>GUARDAR</button>

                    <button>CANCELAR</button>

                </div>

            </div>
        );
    }
}

export default PlanchaRegistro;