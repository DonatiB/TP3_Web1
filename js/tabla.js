"use strict";

document.addEventListener("DOMContentLoaded", cargaCompleta);



let inscriptos = [];

for(let i = 0; i < inscriptos.length; i++){
    
}

async function cargaCompleta(){
    let div = document.querySelector("#intento");
    div.innerHTML = "<h1> Loading </h1>";
    try{
        let response = await fetch(
            "https://60da01d65f7bf100175478c8.mockapi.io/api/inscriptos/1"
        );
        if(response.ok){
            let t = await response.json();
            div.innerHTML = t;              
        }
        else{
            div.innerHTML = "<h1> Error failed URL! </h1>";
            console.log(response);
        }
    }
    catch(error){
        div.innerHTML = "<h1> Connection error </h1>";
        console.log(error);
    }
}
loadweather("");

function changeweather(selectInscripto){
    let inscripto = selectInscripto.value;
    loadweather(inscripto)
}
async function loadweather(inscripto){
    console.log(inscripto);
}
