interface Detalles{
    autor:string;
    year:number;
}

interface Reproductor{

volume:number;
segundo:number;
cancion:string;
detalles:Detalles
}

const reproductor: Reproductor={
    volume:90,
    segundo:66,
    cancion:'Mañanitas',
    detalles:{
            autor:'Cepillin',
            year:1999,
        
    }
}

console.log(`El volumen actual es : ${reproductor.volume}`);
console.log(`El volumen actual es : ${reproductor.segundo}`);
console.log(`La cancion actual es : ${reproductor.cancion}`);
console.log(`El autor de la cancion es : ${reproductor.detalles.autor}`);


const dbz:string[]=['Goku', 'Vegueta', 'Yamcha', 'Trunks'];
console.log('Personaje 1: ',dbz[0]);
console.log('Personaje 1: ',dbz[1]);
console.log('Personaje 1: ',dbz[2]);
console.log('Personaje 1: ',dbz[3]);

const[p1, p2, p3, p4]=dbz
console.log('Personaje 1: ',p1);
console.log('Personaje 1: ',p2);
console.log('Personaje 1: ',p3);
console.log('Personaje 1: ',p4);