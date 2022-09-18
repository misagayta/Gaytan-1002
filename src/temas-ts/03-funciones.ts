//manejo de arreglos

import { createUnparsedSourceFile } from "typescript";

function sumar(a:number,b:number,c?:number=0): void{
   
    console.log(a+b+c)
     
}

console.log(sumar(2,3))
console.log(sumar(2,3,4))


function multiplicar(numero:number, otronumero:number, base:number):number{
return numero+base;
}


const resultado= multiplicar(5,0,4);
console.log(resultado);

interface Alumno2{

    nombre:string;
    edad:number;
    muestraEdad:()=>void;

}

function cursar(alumno:Alumno2, nuevaEdad:number):void{

   alumno.edad+=nuevaEdad;
   console.log(alumno);
}

const nuevoAlumno: Alumno2= {
    nombre:'Mario',
    edad:23,
    muestraEdad(){
        console.log('Edad del alumno: ', this.edad);
    },
}

console.log(nuevoAlumno,28);