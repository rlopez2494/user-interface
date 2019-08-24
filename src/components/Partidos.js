import React, { Component } from 'react';
import "./styles/Partidos.css";

/* Imagenes de partidos (Hard Coded) */
import ea from "../img/partidos/EA.jpg";
import esquerra from "../img/partidos/esquerra.jpg";
import prc from "../img/partidos/prc.jpg";
import psoe from "../img/partidos/PSOE.jpg";

class Partidos extends Component{

    state = {
        hidden: false,
    }

    handleClick = () => {

        const hidden = this.state.hidden;

        this.setState({
            hidden: !hidden
        })
    }

    partidos = [ea, esquerra, prc, psoe];

    newPartidos = this.partidos.map((partido) => {

        return(
            <div id="partido">

                <img src={ partido } alt="partido"/>

                <div id="description">

                    <h3>PODEMOS</h3>

                    <p>Nro de registro: 4552142</p>

                    <p>Lorem Ipsum is simply dummy text of 
                    the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of 
                    type and scrambled it to make a type 
                    specimen book. It has survived not only 
                    five centuries, but also the leap into 
                    electronic typesetting, remaining 
                    essentially unchanged. It was popularised 
                    in the 1960s with the release of Letraset 
                    sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing 
                    software like Aldus PageMaker including 
                    versions of Lorem Ipsum.</p>

                </div>

                <button
                    onClick={this.handleClick}
                    className="Button"
    
                >CANDIDATOS</button>
            </div>
        )
    })

    render() {
        return (
            <div id="partidos" className="main-box">
    
                {
                    this.newPartidos
                }

                <div 
                    className="over"
                    style={{display: (this.state.hidden) ? "block" : "none"}}
                >

                    <div id="caja">

                        <h3>CANDIDATOS</h3>

                        <div id="candidates">

                            <div id="candidate">

                                <img src="" alt="candidato"/>

                                <div>

                                    <h5>Lopez Salazar, Robert Jose</h5>
                                    <p> V - 22.924.952 </p>
                                    <p>0xffa674f34f544d54o3923fb</p>

                                </div>

                            </div>

                            <div id="candidate">

                                <img src="" alt="candidato"/>

                                <div>

                                    <h5>Lopez Salazar, Robert Jose</h5>
                                    <p> V - 22.924.952 </p>
                                    <p>0xffa674f34f544d54o3923fb</p>

                                </div>

                            </div>

                        </div>

                        <div>

                            <button
                            
                                onClick={this.handleClick}

                            >Cerrar</button>

                        </div>
                        
                    </div>
                    

                </div>
    
            </div>
        );
    }
};

export default Partidos;