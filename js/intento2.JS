"use strict"; 

const url = `https://60da01d65f7bf100175478c8.mockapi.io/api/inscriptos`;
let id = 0;
    
async function cargarDatosDeLaApi(){ 

    const descripcionHead = document.querySelector("#fila-head");
    descripcionHead.innerHTML +=
        `<th>` + "Nombre" + `</th>` +
        `<th>` + "Apellido" + `</th>` +
        `<th>` + "E-mail" + `</th>` +
        `<th>` + "DNI" + `</th>` +
        `<th>` + "" + `</th>`
    ;

    try{
        let response = await fetch(url);
        if(response.ok){
            let inscriptos = await response.json();
            console.log(inscriptos);
            for(const inscripto of inscriptos){

                id = inscripto.inscripto;                    
                let file = document.createElement("tr");
        
                let cell = document.createElement("td");
                cell.innerText = inscripto.nombre;
                file.appendChild(cell);
    
                cell = document.createElement("td");
                cell.innerText = inscripto.apellido;
                file.appendChild(cell);
                
                cell = document.createElement("td");
                cell.innerText = inscripto.gmail;
                file.appendChild(cell);
                
                cell = document.createElement("td");
                cell.innerText = inscripto.dni;
                file.appendChild(cell);

                file.appendChild(cell);
                bodyTable.appendChild(file);
               
                
                crearBotones(cell, file, bodyTable, inscripto);
                

                /*cell = document.createElement("td");
                let btnEliminar = document.createElement("BUTTON");
                let btnEditar = document.createElement("BUTTON");//.addEventListener("click",  function(){editarFila(id)});
                btnEliminar.innerText = "Eliminar Fila" + id;
                btnEditar.innerText = "Editar Fila" + id;
                cell.appendChild(btnEliminar);       
                cell.appendChild(btnEditar);*/ 

                //btnEliminar.id = "btn-eliminar"; 
                //btnEliminar = document.querySelector("#btn-eliminar").addEventListener("click", eliminarFila(id));
    
               
                
                              
            }                  
        }
        else{
            let filaAuxiliar = document.createElement("tr");           
            filaAuxiliar.innerHTML =  "<h1> Error failed URL! </h1>";
            bodyTable.appendChild(filaAuxiliar);
            table.appendChild(bodyTable);  
            console.log(response);
        }
    }
    catch(error){
        let filaAuxiliar = document.createElement("tr");           
        filaAuxiliar.innerHTML = "<h1> Connection error </h1>";
        bodyTable.appendChild(filaAuxiliar);
        table.appendChild(bodyTable);  
        console.log(error);
    }
}

function crearBotones(cell, file, bodyTable, numeroFila){
    cell = document.createElement("td");
    let btnEliminar = document.createElement("BUTTON");
    btnEliminar.innerHTML = "Eliminar Fila" + numeroFila;
    cell.appendChild(btnEliminar); 
    file.appendChild(cell);
    bodyTable.appendChild(file); 
}


/*async function eliminarFila(id){
   
    try{
        let response = await fetch(`${url}/${id}`, {
            'method': 'DELETE'
        });
        if(response.status === 200){
            console.log("Funciona ELIMINAR FILA");
        }
        else{
            let filaAuxiliar = document.createElement("tr");           
            filaAuxiliar.innerHTML =  "<h1> Error failed URL! </h1>";
            bodyTable.appendChild(filaAuxiliar);
            table.appendChild(bodyTable);  
            console.log(response);
        }
    }
    catch(error){
        let filaAuxiliar = document.createElement("tr");           
        filaAuxiliar.innerHTML = "<h1> Connection error </h1>";
        bodyTable.appendChild(filaAuxiliar);
        table.appendChild(bodyTable);  
        console.log(error);
    }
}
*/
async function enviar(){
    event.preventDefault();

    let formData = new FormData(form);
    let nombreForm = formData.get("input-nombre");
    let apellidoForm = formData.get("input-apellido");
    let emailForm = formData.get("input-email");
    let dniForm = formData.get("input-dni");
    
    let inscripto = { 
        nombre: nombreForm, 
        apellido: apellidoForm,
        gmail: emailForm, 
        dni: dniForm
    }
    
    try{
        let response = await fetch(url, {
            'method': 'POST',
            'headers': {'Content-Type': 'application/json'},
            'body': JSON.stringify(inscripto)
        }
        );
        if(response.status === 201){
            console.log("Funciona");
        }
        else{
            let filaAuxiliar = document.createElement("tr");           
            filaAuxiliar.innerHTML =  "<h1> Error failed URL! </h1>";
            bodyTable.appendChild(filaAuxiliar);
            table.appendChild(bodyTable);  
            console.log(response);
        }
    }
    catch(error){
        let filaAuxiliar = document.createElement("tr");           
        filaAuxiliar.innerHTML = "<h1> Connection error </h1>";
        bodyTable.appendChild(filaAuxiliar);
        table.appendChild(bodyTable);  
        console.log(error);
    }

}

async function borrarUltimo(){
    event.preventDefault();
    
    try{
        let response = await fetch(`${url}/${id}`, {
            'method': 'DELETE'
        });
        if(response.status === 200){
            console.log("Funciona borrar ultimo");
        }
        else{
            let filaAuxiliar = document.createElement("tr");           
            filaAuxiliar.innerHTML =  "<h1> Error failed URL! </h1>";
            bodyTable.appendChild(filaAuxiliar);
            table.appendChild(bodyTable);  
            console.log(response);
        }
    }
    catch(error){
        let filaAuxiliar = document.createElement("tr");           
        filaAuxiliar.innerHTML = "<h1> Connection error </h1>";
        bodyTable.appendChild(filaAuxiliar);
        table.appendChild(bodyTable);  
        console.log(error);
    }

}

async function modificarUltimo(){
    event.preventDefault();

    let formData = new FormData(form);
    let nombreForm = formData.get("input-nombre");
    let apellidoForm = formData.get("input-apellido");
    let emailForm = formData.get("input-email");
    let dniForm = formData.get("input-dni");
    
    let inscripto = { 
        nombre: nombreForm, 
        apellido: apellidoForm,
        gmail: emailForm, 
        dni: dniForm
    }
    
    try{
        let response = await fetch(`${url}/${id}`, {
            'method': 'PUT',
            'headers': {'Content-Type': 'application/json'},
            'body': JSON.stringify(inscripto)
        }
        );
        if(response.status === 200){
            console.log("Funciona Modificar");
        }
        else{
            let filaAuxiliar = document.createElement("tr");           
            filaAuxiliar.innerHTML =  "<h1> Error failed URL! </h1>";
            bodyTable.appendChild(filaAuxiliar);
            table.appendChild(bodyTable);  
            console.log(response);
        }
    }
    catch(error){
        let filaAuxiliar = document.createElement("tr");           
        filaAuxiliar.innerHTML = "<h1> Connection error </h1>";
        bodyTable.appendChild(filaAuxiliar);
        table.appendChild(bodyTable);  
        console.log(error);
    }
}

function añadirx3(){
    event.preventDefault();   
    enviar();
    enviar();
    enviar();
}

function vaciasTabla(){     
    bodyTable.innerHTML = "";    
}
 

let table = document.querySelector("#table-inscription");
let bodyTable = document.querySelector("#body-table");
let form = document.querySelector("#form");
let enviarDato = document.querySelector("#btn-cargar").addEventListener("click", function(){enviar()}); 
let borrarUltimoInscripto = document.querySelector("#borrar-ultimo").addEventListener("click", function(){borrarUltimo()}); 
let modificaUltimo = document.querySelector("#btn-modificar-ultimo").addEventListener("click", function(){modificarUltimo()}); 
let cargarx3 = document.querySelector("#btn-cargarx3").addEventListener("click", function(){añadirx3()}); 
let btnVaciar = document.querySelector("#reset").addEventListener("click",  function(){vaciasTabla()}); 
cargarDatosDeLaApi();