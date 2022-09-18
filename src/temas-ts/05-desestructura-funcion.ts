interface Producto{
    desc: string;
    precio:number;
}

const telefono: Producto={
    desc:'Noki',
    precio:2345
}
const tablet:Producto= {
    desc:'Ipad Air',
    precio: 13155
}

function calcularIva(productos:Producto[]):number{
    let total=0;

    productos.forEach((producto)=>{
        total+=producto.precio;
    })
    return total*0.16;
}

const articulos1=[telefono, tablet];
const IvaTot=calcularIva(articulos1);
console.log(`IVA: ${IvaTot}`);

export function calcularIva2(productos:Producto[]):[number,number]{
    let total=0;
    productos.forEach(({precio})=>{
        total+=precio;
    })
    return [total,total*0.16];
}

const articulos2=[telefono,tablet];
const[total,iva]=calcularIva2(articulos2);
console.log(`Total: ${total} \n IVA: ${iva}`);
