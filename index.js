'use strict';
let nombreDisco;
let nombreAutor;
let codigoDisco;
let nombrePista;
let duracionPista;
// Discos:
let discos = [];
let pistas=[]


const Cargar = () => {
    
 pedirDisco()
 
 //guardar disco.
 let disco={
    nombre:nombreDisco,
    autor:nombreAutor,
    codigo:codigoDisco,
    }
    discos.push(disco)




 //pedir pistas 
pedirPista()
//crear objeto pista 
let pista={
    nombre:nombrePista,
    duracion:duracionPista,
}

pistas.push(pista)

console.log(discos)
console.log(pistas)
};






// Función Mostrar:
const Mostrar = () => {
    // Variable para ir armando la cadena:
    let html = '';

    // Cositas:

    // Si modificaste el nombre de la variable para ir armando la cadena, también hacelo acá:
    document.getElementById('info').innerHTML = html; // <--- ahí es acá
};

// Todas las funciones que necesites:
function pedirDisco (){
    do {
        nombreDisco=prompt("ingrese nombre del disco")
        if (nombreDisco==="") {
        alert ("complete el campo")
        }
     } while (nombreDisco==="");       
    
     do {
        nombreAutor=prompt("ingrese nombre del autor")
        if (nombreAutor==="") {
            alert ("complete el campo")
            }
     } while (nombreAutor==="");
      
    
     do {
        codigoDisco=Number (prompt("ingrese codigo del disco"))
        if (codigoDisco===""||(!(codigoDisco>=1 && codigoDisco<=999)) ) {
            alert ("el valor debe ser mayor a 1 y menor a 999")
            
            }
        } while (!(codigoDisco>=1 && codigoDisco<=999) || (codigoDisco===""));
    

}

function pedirPista(){
    do {
        do {
        nombrePista=prompt ("ingrese nombre de la pista")
         if (nombrePista==="") {
            alert ("complete el campo")
         }
        } while (nombrePista==="");

        do {
            duracionPista=prompt("ingrese la duracion de la pista expresada en segundos")
            if ((duracionPista==="") || (isNaN (duracionPista))) {
                alert ("ingrese la duracion de la pista expresada en segundos")
                }
        } while ((duracionPista==="") || (isNaN (duracionPista)));
        
        
    
    } while (confirm("desea cargar otra pista?"));
        
       
}