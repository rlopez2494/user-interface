import React from 'react';

function Candidato (props){

    const candPicture = props.data.candPicture;

    const imgs = props.data.imgs;

    const {...styles} = props.styles;

    const candPartidos = imgs.map((img) => {

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
            src={ candPicture } 
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
            > VOTAR
            </button>

        </div>
    );

}

export default Candidato;