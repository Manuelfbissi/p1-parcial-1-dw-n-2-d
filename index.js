'use strict';
let nombreDisco;
let nombreAutor;
let codigoDisco;
let nombrePista;
let duracionPista;
let contadorDiscos=1;
// Discos:
let discos = [];
let pistas=[]


const Cargar = () => {
 do {
pedirDisco()
 //guardar disco.
 
 let disco={
     nombre:nombreDisco,
     autor:nombreAutor,
     codigo:codigoDisco,
     pistas:[],
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

} while (confirm("¿Desea ingresar otro disco?"));
console.log (contadorDiscos++)
console.log(discos)
console.log(pistas)

};


// Todas las funciones que necesites:
function pedirDisco (){
    do {
        nombreDisco=prompt("Ingrese nombre del disco")
        if (nombreDisco==="") {
        alert ("Complete el campo")
        }
     } while (nombreDisco==="");       
    
     do {
        nombreAutor=prompt("Ingrese nombre del autor")
        if (nombreAutor==="") {
            alert ("Complete el campo")
            }
     } while (nombreAutor==="");
      
    
     do {
        codigoDisco=Number (prompt("Ingrese codigo del disco"))
        if (codigoDisco===""||(!(codigoDisco>=1 && codigoDisco<=999)) ) {
            alert ("El valor debe ser mayor a 1 y menor a 999")
            
            }
        } while (!(codigoDisco>=1 && codigoDisco<=999) || (codigoDisco===""));
    

}

function pedirPista(){
    do {
        do {
        nombrePista=prompt ("Ingrese nombre de la pista")
         if (nombrePista==="") {
            alert ("Complete el campo")
         }
        } while (nombrePista==="");

        do {
            duracionPista=prompt("Ingrese la duracion de la pista expresada en segundos")
            if ((duracionPista==="") || (isNaN (duracionPista))) {
                alert ("Ingrese la duracion de la pista expresada en segundos")
                }
        } while ((duracionPista==="") || (isNaN (duracionPista)));
        
        
    
    } while (confirm("¿Desea cargar otra pista?"));
        
       
}

// Función Mostrar:
function Mostrar(){
    // Variable para ir armando la cadena:
   let html = "<ul>";


   for (const item of discos){
    console.log (item);
   }
      for (let i = 0; i < discos.length; i++){
    html += `<strong> Nombre del disco: </strong> <li> ${discos[i].nombre}</li>`
    html += `<strong> Autor: </strong> <li> ${discos[i].autor}</li>`
    html += `<strong> Codigo unico del disco: </strong> <li> ${discos[i].codigo}</li>`

    
    
    for (let j= 0; j < discos.pistas.length; j++){
    html += `<strong> Nombre de la pista: </strong> <li> ${pistas[j].nombre}</li>`
    html += `<strong> Duracion de la pista: </strong> <li> ${pistas[j].duracion}</li>`
    }

}

 html+= "</ul>";
     
   


    


    // Cositas:

    // Si modificaste el nombre de la variable para ir armando la cadena, también hacelo acá:
    document.getElementById('info').innerHTML = html; // <--- ahí es acá

    
}; 
