import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom"

const Candidato = (props) => {

    const { candPicture, imgs} = props.data


    const candPartidos = imgs.map((img) => {

        return(
            <li>
                <a href="#">
                    <img src={ img } alt="partido"/> 
                </a>
            </li>
        );

    })


    return (
        <Router>
        <div id="candidato">

            <img src={ candPicture } alt="candidato"/>

            <div id="nombre">

                <h4>Lopez Salazar, Robert Jose</h4>
                <p>V - 22924952</p>

            </div>

            <div id="partidos">

                <ul>

                    {
                        candPartidos
                    }

                </ul>

            </div>


            <Link to="/usuario/votar">

                <button>VOTAR</button>

            </Link>

        </div>
        </Router>
    );
};

export default Candidato;