"use strict"
document.getElementById("btn").addEventListener("click",
function(e){
    e.preventDefault();
    captcha();

});
document.getElementById("verificar").addEventListener("click",
function(e) {
    e.preventDefault();
    verificar();

});
captcha();
function captcha(){
    let no = "1234567890ABCDEFGHIJKLMNOPQRSTUVXYWZabcdefghijklmnopqrstuvxywz"

    let x = no[Math.floor(Math.random()* no.length)];

    for (let i = 0; i < 6; i++){
        x = x + no[Math.floor(Math.random()* no.length)];
    }
 
    document.querySelector("#parrafo").innerHTML = x;

}
function verificar(){
    
    let aux1 = document.querySelector("#texto").value;
    let aux2 = document.querySelector("#parrafo").innerHTML;
    let aceptado = "Captcha CORRECTO";
    let rechazado = "Captacha INCORRECTO";

    if(aux1 == aux2){
        document.querySelector("#valor").classList.remove("rojo");
        document.querySelector("#valor").classList.add("verde");
        document.querySelector("#valor").innerHTML = aceptado;
    
    }else{
        document.querySelector("#valor").classList.remove("verde");
        document.querySelector("#valor").classList.add("rojo");
        document.querySelector("#valor").innerHTML = rechazado;
    }
    
    
}
