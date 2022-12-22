let scoreHome = document.getElementById("home-score")
let puntajeCasa = 0


function sumaUno(){
    puntajeCasa += 1
    scoreHome.textContent = puntajeCasa
}

function sumados(){
    puntajeCasa += 2
    scoreHome.textContent = puntajeCasa
}

function sumatres(){
        puntajeCasa += 3
    scoreHome.textContent = puntajeCasa
}


let scoreGuest = document.getElementById("guest-score")

let puntajeGuest = 0

function sumaUnog(){
    puntajeGuest += 1
    scoreGuest.textContent = puntajeGuest
}

function sumadosg(){
    puntajeGuest += 2
    scoreGuest.textContent = puntajeGuest
}

function sumatresg(){
        puntajeGuest += 3
    scoreGuest.textContent = puntajeGuest
}



function reset(){
    puntajeGuest= 0
    puntajeCasa = 0
    scoreGuest.textContent = puntajeGuest
    scoreHome.textContent = puntajeCasa
}