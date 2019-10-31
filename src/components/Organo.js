import React, { Component } from 'react';
import "./styles/Organo.css"
import OrganoCandidatos from './OrganoCandidatos';

class Organo extends Component {

    render() {

        const { name, planchas } = this.props.organo
        
        return (
            <div
                className="organo"
            >

                <h1>{name}</h1>

                <div className="organo__choices">

                    <div
                        className="organo__HEAD"
                    >

                        <ul>
                            {
                                (planchas.length > 0) ?
                                Object.keys(planchas[0])
                                .map( nombre => <li>{nombre}</li>)
                                    :
                                null
                            }

                            {
                                (name === "Tribunal Disciplinario") ?
                                <li>Suplentes</li>
                                :
                                null
                            }
                    
                            <li>
                                <p>1er. Vocal</p>
                                <p>2do. Vocal</p>
                                <p>3er.Vocal</p>
                            </li>


                        </ul>

                    </div>
                    
                    {
                        planchas.map( plancha => <OrganoCandidatos plancha={plancha} /> )
                    }
                    
                </div>
                
            </div>
        );
    }
}

export default Organo;