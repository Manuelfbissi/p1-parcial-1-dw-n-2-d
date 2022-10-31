'use strict';

/*
 * APELLIDO, NOMBRE | APELLIDO, NOMBRE
 */

// Ejemplo de la estructura de un disco:
// let disco = {
//     Nombre: 'El lado oscuro de la Programación',
//     Autor: 'Los Programadores Anónimos',
//     Codigo: 1,
//     Pistas: [
//         {
//             Nombre: 'Esa cajita loca llamada variablecita',
//             Duracion: 200,
//         },
//         {
//             Nombre: 'Nunca quise ser un NaN',
//             Duracion: 180,
//         },
//         {
//             Nombre: 'No quiero programar',
//             Duracion: 90,
//         },
//         {
//             Nombre: 'Bajo presión',
//             Duracion: 240,
//         },
//         {
//             Nombre: 'La odisea de las variables privadas',
//             Duracion: 120,
//         },
//         {
//             Nombre: 'Sr. Programador',
//             Duracion: 720,
//         },
//     ],
// };

// Discos:
let discos = [];



// Función Cargar:
const Cargar = () => {
 //pedir datos y validar
let nombreDisco;
let nombreAutor;
let codigoDisco;
let nombrePista;
let duracionPista;

    

 do {
    nombreDisco=prompt("ingrese nombre del disco")

 } while (nombreDisco==="");       
 
 do {
    nombreAutor=prompt("ingrese nombre del autor")
 } while (nombreAutor==="");
  

 do {
    codigoDisco=Number (prompt("ingrese codigo del disco"))

    
} while (!(codigoDisco>=1 && codigoDisco<=999) || (codigoDisco===""));
//guardar disco.
let disco={
    nombre:nombreDisco,
    autor:nombreAutor,
    codigo:codigoDisco,
    }
    discos.push(disco)


 let pistas=[]

 //pedir pistas 
 do{
 do {
 nombrePista= prompt ("ingrese nombre de la pista ")
 }while(nombrePista==="")

 do {
 duracionPista=Number (prompt("ingrese duracion de la pista"))
} while (duracionPista==="");
 //crear objeto pista
 let pista={
    nombre:nombrePista,
    duracion:duracionPista,
 }

 //guardar pista 
 pistas.push(pista) 

    
 } while (confirm("¿Desa cargar otra pista?"));

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
