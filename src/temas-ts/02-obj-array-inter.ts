import { displayPartsToString } from "typescript";


let nombres:string[]=['mario', 'dario', 'juan'];
console.log(nombres);

let datos:(boolean|number|string)[]=['Mario',23,true,'lopez']


console.log(datos);

datos.push(200);
datos.push('Maria');
datos.push(false);
console.log(datos);

//otraa forma de crear arreglos

let arreglo: Array<number>=[1,2,3,4]

const nombre1:string='datos1'

interface Alumno{
    matricula:string,
    nombre:string,
    edad:number,
    email:string
    materias?:string[]//para hacer un campo opcional se agrega '?'
}



const alumno:Alumno={

    matricula:'19002549',
    nombre:'Mario',
    edad:23,
    email:'misagayta@gmail',
    materias:['Ingles']

}

alumno.nombre='Felipe';
console.log(alumno)



