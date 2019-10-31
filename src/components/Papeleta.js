import React, {Component} from "react";
import "./styles/Papeleta.css"
import Organo from "./Organo"
import axios from "axios"


class Papeleta extends Component{

    state = {
        data: []
    }

    getArrays = (data) => {
        // Tribunales disciplinarios postuladas
        let Td = {
            name: "Tribunal Disciplinario",
            planchas: []
        }

        // Juntas Directivas Nacionales postuladas
        let Jd= {
            name: "Junta Directiva Nacional",
            planchas: []
        }

        // Juntas Directivas de Centro
        let Jdc = {
            name: "Junta Directiva de Centro",
            planchas: []
        }

        
        data.forEach( plancha => {

            if (plancha.tribunalDisciplinario && (Td.planchas.length < 3)) {
                Td.planchas.push(plancha.tribunalDisciplinario)
            }

            if(plancha.juntaDirectiva && (Td.planchas.length < 3)) {
                Jd.planchas.push(plancha.juntaDirectiva)
            }

            if(plancha.juntaDirectivaDeCentro && (Td.planchas.length < 3)) {
                Jdc.planchas.push(plancha.juntaDirectivaDeCentro)
            }
        })

        const organos = [Jd, Td, Jdc]
    
        return organos
    }
    
    componentDidMount = () => {
        this.apiCall()
    }

    apiCall = () => {
        axios.get("http://localhost:9000/planchas")
        .then( response => {
            this.setState({
                data: response.data
            })
        })
        .catch( err => console.log(err) )
    }

    render() {
        const { data } = this.state

        return(
            <div
                className="papeleta main-box"
            >
                <div className="main-box__header">
                    <h1>ORGANOS NACIONALES</h1>
                </div>
                

                {/* Obtener un array con los 
                distintos organos y sus 
                postulantes */}
                
                {   
                    //Obtener un array con 
                    //los distintos organos y sus 
                    //postulantes

                    (data.length > 0) ?
                    this.getArrays(data).map( organo => <Organo organo={organo} /> )
                        :
                    null
                }

            </div>
        )
    }
}

export default Papeleta