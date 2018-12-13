var num = 0;
var contador = 0;
var pos = 0;
var final1 = 0;
var final2 = 0;
document.getElementsByClassName("player-0-panel")[0].classList.remove("active")
document.getElementsByClassName("player-1-panel")[0].classList.remove("active")

document.getElementById("inicio").addEventListener("click",function(){
    pos = 1;
    document.getElementsByClassName("player-0-panel")[0].classList.add("active")
    document.getElementsByClassName("player-1-panel")[0].classList.remove("active")
})

document.getElementById("girarDado").addEventListener("click",function(){
    num = Math.floor(Math.random() * 5 + 1);
    document.getElementById("dice").src = ("dice-"+num+".png");
    
    switch(pos){
        case 1:
            if(num !== 1){
                contador = contador + num;
                document.getElementById("marcadorUno").innerHTML = contador;
            }
            else{
                contador = 0;
                document.getElementById("marcadorUno").innerHTML = contador;
                pos = 2;
                document.getElementsByClassName("player-0-panel")[0].classList.remove("active")
                document.getElementsByClassName("player-1-panel")[0].classList.add("active")

            }
            break;
        
        case 2:
            if(num !== 1){
                contador = contador + num;
                document.getElementById("marcadorDos").innerHTML = contador;
            }
            else{
                contador = 0;
                document.getElementById("marcadorDos").innerHTML = contador;
                pos = 1;
                document.getElementsByClassName("player-0-panel")[0].classList.add("active")
                document.getElementsByClassName("player-1-panel")[0].classList.remove("active")
            
            }
    }
    
});

document.querySelector("#insertar").addEventListener("click",function(){
    if(pos == 1){
        document.getElementById("score-0").innerHTML = final1 = final1 + contador;
        document.getElementById("marcadorUno").innerHTML = 0;
        contador = 0;
        pos = 2;
        document.getElementsByClassName("player-0-panel")[0].classList.remove("active")
        document.getElementsByClassName("player-1-panel")[0].classList.add("active")
    }
    else if(pos == 2){
        document.getElementById("score-1").innerHTML = final2 = final2 + contador;
        document.getElementById("marcadorDos").innerHTML = 0;
        contador = 0;
        pos = 1;
        document.getElementsByClassName("player-0-panel")[0].classList.add("active")
        document.getElementsByClassName("player-1-panel")[0].classList.remove("active")
    }
    
    if(final1 >= 50){
        alert("El ganador es el jugador uno");
        document.getElementById("marcadorUno").innerHTML = 0;
        document.getElementById("marcadorDos").innerHTML = 0;
        document.getElementById("score-0").innerHTML = 0;
        document.getElementById("score-1").innerHTML = 0;
        contador = 0;
        pos = 0;
        final1 = 0;
        final2 = 0;
        document.getElementsByClassName("player-0-panel")[0].classList.remove("active")
        document.getElementsByClassName("player-1-panel")[0].classList.remove("active")
    } else if(final2 >= 50){
        alert("El ganador es el jugador dos");
        document.getElementById("marcadorUno").innerHTML = 0;
        document.getElementById("marcadorDos").innerHTML = 0;
        document.getElementById("score-0").innerHTML = 0;
        document.getElementById("score-1").innerHTML = 0;
        contador = 0;
        pos = 0;
        final1 = 0;
        final2 = 0;
        document.getElementsByClassName("player-0-panel")[0].classList.remove("active")
        document.getElementsByClassName("player-1-panel")[0].classList.remove("active")
    }
});