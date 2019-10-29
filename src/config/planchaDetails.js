import React from "react"

const planchaDetalles = (data) => {
    const { juntaDirectiva, juntaDirectivaDeCentro, tribunalDisciplinario } = data
    const organos = { juntaDirectiva, juntaDirectivaDeCentro, tribunalDisciplinario }

    const planchaArray = Object.keys(organos).map( organo => {
        return(
            <div className="plancha__detalles__organo">
                <div className="plancha__detalles__organo--highlight">
                    <h5>---</h5>
                    <h5>{organo}</h5>
                </div>
                
                <ul className="plancha__detalles__JDN">
                    {
                        Object.keys(organos[organo]).map( puesto => {
                            return(
                                <li>
                                    <p><em>{puesto}: </em>{organos[organo][puesto]} (CIV Nro. 45874145) </p>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        )
    })

    return planchaArray
}

export default planchaDetalles