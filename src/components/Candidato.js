import React, { Component } from 'react';
import { BrowserRouter as Link} from "react-router-dom";

class Candidato extends Component{

    constructor(props) {

        super(props);

        this.state = {
            showCase: true
        }

        this.candPicture = props.data.candPicture;

        this.imgs = props.data.imgs;

    }


    render() {

        const {...styles} = this.props.styles;

        const candPartidos = this.imgs.map((img) => {

            return(
                <li
                    style={styles.candPartidos}
                >
                    <a href="#">
                        <img src={ img } alt="partido"/> 
                    </a>
                </li>
            );
        
        });

        return(
            <div 

            id="candidato"

            style={styles.candidato}
            
            >
    
                <img 
                src={ this.candPicture } 
                alt="candidato"

                style={styles.candPicture}
                
                />
    
                <div id="nombre">
    
                    <h4>Lopez Salazar, Robert Jose</h4>
                    
                    <p>V - 22924952</p>

                    <p>Llave publica: 0xffa674f34f544d54o3923fb</p>

                    
    
                </div>
    
                <div 
                    id="partidos"

                    style={styles.partidos}
                >
    
                    <ul
                        style={styles.partidosUl}
                    >
    
                        {
                            candPartidos
                        }
    
                    </ul>
    
                </div>
    
    
                <button
                    style={styles.candidatoButton}
                >
                    <Link to="/usuario/votar">
                        VOTAR
                    </Link>
                </button>
    
            </div>
        );
    }
}

export default Candidato;