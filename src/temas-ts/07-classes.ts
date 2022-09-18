class Persona{

    nombre:string;
    edad: string;

    constructor(a:string, b:number){
        this.nombre=a;
        this.edad=b;
    }

    imprimePersona(){
        console.log(`Nomre: ${this.nombre}\nEdad: ${this.edad}`)
    }

}

let persona1:Persona;
persona1=new Persona('Dana',20);
let persona2=new Persona('Laura',19);
persona1.nombre='Mario';
persona1.edad=20;
persona1.imprimePersona();
persona2.imprimePersona();

class Dado{
    private valor:number;
    public tirar(){
        this.generar();
    }
    private generar(){
        this.valor=Math.floor(Math.random()*6)+1;
    }

    imprimir(){
        console.log(`Salio el valor: ${this.valor}`);
    }
}

let dado1=new Dado();
dado1.tirar();
dado1.imprimir();