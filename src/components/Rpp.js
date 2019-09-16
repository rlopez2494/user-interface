/*funcionalidad para el conteo de votos (aplicacion a sistema D`hont) */

function Rpp() {

    const votos = [
        {
            nombre: "rojo",
            votos: 500,
            asientos: 0
        },
        {
            nombre: "azul",
            votos: 300,
            asientos: 0
        },
        {
            nombre: "verde",
            votos: 800,
            asientos: 1
        },
    ]

    const puestos = 150

    const arrayN = [];

    let largest = {}
    
    for(let i = 0; i < puestos; i++) {

        
        for(let k = 0; k < votos.length; k++) {
            
            arrayN[k] = votos[k].votos / (votos[k].asientos + 1);

            console.log(arrayN[k]);
        }
       
        for(let j = 0; j < votos.length; j++) {
            if(largest < votos[j]) {
                largest = {
                    nombre: votos[j].nombre,
                    puntaje: votos[j]
                }
            }
        }
    }
}

export default Rpp