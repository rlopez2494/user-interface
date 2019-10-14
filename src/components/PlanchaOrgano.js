import React, { Component } from 'react';

class PlanchaOrgano extends Component {
    
    
    nombreOrgano = this.props.organo.nombre
    

    puestos = Object.keys(this.props.organo.puestos).map((puesto) => {
        console.log(this.props[puesto])
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
                        value={this.props[puesto]}
                        onChange={(event) => this.props.handleChange(this.nombreOrgano, event)}
                    />

                    <div className="plancha__organo--disponible"></div>
                </div>

            </div>
        )
    })

    render() {
        console.log(this.props)
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