// Declaracion funcion
function aleatorio (min,max) {
    // ALEATORIDAD ((max - min + 1) + min)
    return Math.floor(Math.random()*(max-min + 1) + min)
}

function eleccion (jugada) {
    let resultado = ""
    if (jugada == 1){
        resultado = "Piedra 🪨"
    }
    else if (jugada == 2){
        resultado = "Papel 🧻"
    }
    else if (jugada == 3){
        resultado ="Tijera ✂️"
    }
    else {
        resultado = "Opcion icorrecta"
    }
    
    return resultado

}

//1 es piedra, 2 es papel, 3 es tijera
let jugador = 0
// Invocacion funcion
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3){
    
    pc = aleatorio (1,3)
    jugador = prompt("Elige: 1 para piedra, 2 para papel o 3 para tijera")
    
    //alert("Elegiste: " + jugador)
    
    alert("PC elige: " + eleccion(pc))
    alert("Elegiste: " + eleccion(jugador))
    
    // COMBATE

    if (pc == jugador){
        alert("EMPATE")
    } else if ((pc == 1 && jugador == 2) || (pc == 2 && jugador == 3) || (pc == 3 && jugador == 1)){
        alert("GANA SOFIA 👧🏻")
        triunfos = triunfos + 1
    } else {
        alert("GANA PC 💻")
        perdidas = perdidas + 1
    }
   
    

}

alert("GANASTE " + triunfos + " VECES. PERDISTE " + perdidas + " VECES")