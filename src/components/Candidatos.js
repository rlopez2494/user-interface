import React from "react";
import Candidato from "./Candidato";
import "./styles/Candidatos.css";
import candPicture from "../img/cand-pic.jpg";
import {BrowserRouter as Router} from "react-router-dom";

/* Imagenes de partidos (Hard Coded) */
import ea from "../img/partidos/EA.jpg";
import esquerra from "../img/partidos/esquerra.jpg";
import prc from "../img/partidos/prc.jpg";
import psoe from "../img/partidos/PSOE.jpg";

function Candidatos() {

    const data = {
        candPicture,
        imgs: [ea, esquerra, prc, psoe],
    }

    return(
        <div id="candidatos">

        <Router>

            <Candidato data={ data } />
            <Candidato data={ data } />
            <Candidato data={ data } />
            <Candidato data={ data } />
            <Candidato data={ data } />
            <Candidato data={ data } />
            
        </Router>

        </div>
    )
}

export default Candidatos;