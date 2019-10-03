import React, { Component } from 'react';
import PlanchaOrgano from "./PlanchaOrgano"
import "./styles/PlanchaRegistro.css";

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

    handleChange = (nombreOrgano, event) => {
        const currentState = {...this.state[nombreOrgano]}
        const { value, name } = event.target;
        currentState[name] = value;
        
        this.setState({
            [nombreOrgano]: currentState
        })
    }

    planchaOrganos = Object.keys(this.state).map((organo) => {

        return(
            <PlanchaOrgano 
                organo={{
                    nombre: organo,
                    puestos: {...this.state[organo]}
                }}
                handleChange={this.handleChange}
                presidente={this.state[organo].presidente}
                vicepresidente={this.state[organo].viceresidente}
                tesorero={this.state[organo].tesorero}          
                secretarioGeneral={this.state[organo].secretarioGeneral}
                key={Math.random()}
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

            </div>
        );
    }
}

export default PlanchaRegistro;