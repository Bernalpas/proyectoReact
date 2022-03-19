
//Importo la librería React para crear el componente
import React from 'react';

const date = new Date();
const dia = date.getDate();
const mes = date.getMonth() + 1;
const hora = date.getHours();
const minutos = date.getMinutes();
const nombre = date.getDay();
const arreglo = ['Peras', 'Manzanas', 'Cerezas'];

function dameHora(){
    console.log(arreglo[0]);
    console.log(arreglo[1]);
    console.log(arreglo[2]);
    mejora(nombre);
    return `Hoy es ${dia} del mes de ${mes} y la hora en este momento es ${hora} : ${minutos} y es: ${nombre}`
}

function mejora(nombre) {
    switch (nombre) {
        case 0:
            console.log('Domingo');
            break;
        case 1:
            console.log('Lunes');
            break
        case 2:
            console.log('Martes');
            break
        case 3:
            console.log('Miércoles');
            break
        case 4:
            console.log('Jueves');
            break
        case 5:
            console.log('Viernes');
            break
        case 6:
            console.log('Sábado');
            break
        default:
            console.log('No corresponde a un día');
    }
}


function Reloj(){

    return(
        <div>
            <h3>Time: {dameHora()}</h3>
        </div>
    );
}


export default Reloj;



/*
0 = enero,
1 = febrero,
2 = marzo........
*/





