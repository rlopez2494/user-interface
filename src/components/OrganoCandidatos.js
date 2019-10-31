import React, { Component } from 'react';

class OrganoCandidatos extends Component {

    render() {
        console.log(this.props.plancha)
        const { plancha } = this.props
        
        return (
            <div className="organo__plancha">
                        <ul>

                            <li>
                                <p>Seleccionar Todo</p>
                                <p>-----------</p>
                                <button></button>
                            </li>

                            <li>
                                <h5>PLANCHA N</h5>
                            </li>

                            {
                                Object.keys(plancha).map( candidato => {
                                    return(
                                        <li>
                                            {plancha[candidato]}
                                        </li>
                                    )
                                })
                            }

                            <li>
                                <h5>VOTO LISTA</h5>
                                <p>---------------</p>
                                <button></button>
                            </li>

                        </ul>

                    </div>
        );
    }
}

export default OrganoCandidatos;