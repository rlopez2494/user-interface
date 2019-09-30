import React from "react";
import Candidato from "./Candidato";
import "./styles/Candidatos.css";
import candPicture from "../img/cand-pic.jpg";


/* Imagenes de partidos (Hard Coded) */
import ea from "../img/partidos/EA.jpg";
import esquerra from "../img/partidos/esquerra.jpg";
import prc from "../img/partidos/prc.jpg";
import psoe from "../img/partidos/PSOE.jpg";

function Candidatos(props) {

    const data = {
        candPicture,

        imgs: [ea, esquerra, prc, psoe],
    }

    const styles = {

        candidato: {
            flexDirection: "row",
            width: "95%",
            justifyContent: "space-between",
            height: "auto",
            borderRadius: "10px",
            overflow: "hidden",
            alignItems: "stretch",
        },

        candPicture: {
            width: 200, 
            height: 150
        },

        partidos: {
            width: "auto",
            margin: 0,
        },

        partidosUl: {
            margin: "auto 10px",
            width: 150
        },

        Button: {
            display: "none"
        },

        candPartidos: {
            width: "50px",
            margin: 10,
        }

    }

    const { path } = props.match;

    const showCase = (path === "/usuario/s");

    return(
        <div 
        id="candidatos"
        className="main-box"
        style={(showCase) ? {alignItems: "stretch"} : null}
        >

            <Candidato
                data={ data } 
                styles={(showCase) ? styles : null}
            />

            <Candidato
                data={ data } 
                styles={(showCase) ? styles : null}
            />

            <Candidato
                data={ data } 
                styles={(showCase) ? styles : null}
            />

            <Candidato
                data={ data } 
                styles={(showCase) ? styles : null}
            />

            

        </div>
    )
}

export default Candidatos;