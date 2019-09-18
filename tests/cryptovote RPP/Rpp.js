/*funcionalidad para el conteo de votos (aplicacion a sistema D`hont) */

const resultados = [
    {
        nombre: "P1",
        votos: 720,
        asientos: 1,
        indice: 0
    },
    {
        nombre: "P2",
        votos: 540,
        asientos: 0,
        indice: 0
    },
    {
        nombre: "P3",
        votos: 180,
        asientos: 0,
        indice: 0
    },
    {
        nombre: "P4",
        votos: 60,
        asientos: 0,
        indice: 0
    },
]


function RepresentacionRPP(resultados) {
        
    for (let i = 0; i < 5; i++) {
        console.log(i+1)
        var largest = 0;
        var largestObject = {};
        //console.log("Objeto principal: ", JSON.stringify(largestObject))
        // console.log("largest inicial", largest);

            for (var resultado in resultados) {

                resultados[resultado].indice = 
                Number(resultados[resultado].votos / (resultados[resultado].asientos + 1));

                // console.log("Resultado indice: ", JSON.parse(JSON.stringify(resultados[resultado])));

                if(largest < resultados[resultado].indice) {     
                    largest = resultados[resultado].indice
                    largestObject = resultados[resultado];

                    // console.log("Objeto ganador: ", largestObject.nombre, largest);
                }
            
            }


            for (resultado in resultados) {

                if (JSON.stringify(resultados[resultado]) === JSON.stringify(largestObject)) {  
                    
                    resultados[resultado].asientos += 1;
                    // console.log("Se le suma un asiento:", resultados[resultado])
                }

            }
            // console.log(`Resultado ciclo ${i}: `, resultados);
    }

    console.log(resultados);

}

RepresentacionRPP(resultados)
