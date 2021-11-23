"use strict"

let btnMenu = document.querySelector("#btnMenu")
let menu = document.querySelector("#encabezado")
let botonera = document.querySelector("#botonera")
btnMenu.addEventListener("click", mostrarmenu)

function mostrarmenu(){
    menu.classList.toggle("mostrarEncabezado");
    menu.classList.display = 'flex';
}