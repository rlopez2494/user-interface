import React, { Component } from 'react';

class PlanchaOrgano extends Component {

    nombreOrgano = this.props.organo.nombre

    puestos = Object.keys(this.props.organo.puestos).map((puesto) => {
        return(
            <div 
            className="plancha-registro__puesto"
            key={Math.random()}
            >

                <h4>{puesto}</h4>

                <div className="plancha-registro__puesto--revisar">

                    <input 
                        type="text" 
                        name={puesto} 
                        onChange={(event) => this.props.handleChange(this.nombreOrgano,event)}
                        value={this.props.organo[puesto]}
                    />

                    <div className="plancha__organo--disponible"></div>
                </div>

            </div>
        )
    })

    render() {
        return (
            <div className="plancha-registro__organo">

                    <h2>{this.props.organo.nombre}</h2>

                    {
                        this.puestos
                    }

                </div>
        );
    }
}

export default PlanchaOrgano;