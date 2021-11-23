"use strict"; 

const url = `https://60da01d65f7bf100175478c8.mockapi.io/api/inscriptos`;
let id = 0;

document.addEventListener("DOMContentLoaded", function() {
    
    

    let table = document.querySelector("#table-inscription");
    let bodyTable = document.querySelector("#body-table");
    
    const descripcionHead = document.querySelector("#fila-head");
    descripcionHead.innerHTML +=
        `<th>` + "Nombre" + `</th>` +
        `<th>` + "Apellido" + `</th>` +
        `<th>` + "E-mail" + `</th>` +
        `<th>` + "DNI" + `</th>`
    ;
   
    cargaCompleta();
    async function cargaCompleta(){ 
        try{
            let response = await fetch(url);
            if(response.ok){
                let inscriptos = await response.json();
                recorrerArregloInscriptos(inscriptos);
                console.log(inscriptos);
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

    function recorrerArregloInscriptos(inscriptos){     
        for(let inscripto = 0; inscripto < inscriptos.length; inscripto++){
                        
            let file = document.createElement("tr");
    
            let cell = document.createElement("td");
            cell.innerText = inscriptos[inscripto].nombre;
            file.appendChild(cell);

            cell = document.createElement("td");
            cell.innerText = inscriptos[inscripto].apellido;
            file.appendChild(cell);
            
            cell = document.createElement("td");
            cell.innerText =inscriptos[inscripto].gmail;
            file.appendChild(cell);
            
            cell = document.createElement("td");
            cell.innerText = inscriptos[inscripto].dni;
            file.appendChild(cell);

            id = inscriptos[inscripto].id
            
            bodyTable.appendChild(file);
            table.appendChild(bodyTable);      
        }       
    }



    let form = document.querySelector("#form");
    let enviarDato = document.querySelector("#btn-cargar").addEventListener("click", function(){
        enviar()
    }); 
    let borrarUltimoInscripto = document.querySelector("#borrar-ultimo").addEventListener("click", function(){
        borrarUltimo()
    }); 

    async function enviar(){
        event.preventDefault();

        let formData = new FormData(form);
        let nombreForm = formData.get("input-nombre");
        let apellidoForm = formData.get("input-apellido");
        let emailForm = formData.get("input-email");
        let dniForm = formData.get("input-dni");
        
        let nuevoInscripto = { 
            nombre: nombreForm, 
            apellido: apellidoForm,
            email: emailForm, 
            dni: dniForm
        }
        
        try{
            let response = await fetch(url, {
                'method': 'POST',
                'headers': {'Content-Type': 'application/json'},
                'body': JSON.stringify(nuevoInscripto)
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
        //recorrerArregloInscriptos(inscriptos);
        
        try{
            let response = await fetch( `${url}/${id}`, {
                'method': 'DELETE'
            }
         );
            if(response.status === 201){
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
 
});
