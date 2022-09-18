export class Multiplica{

    private num: number;
    private num2: number;
    private total: number;

    public setNumber(x: number){
        this.num=0;
        this.num = x;
    }

    public setNumber2(y: number){
        this.num2=0;
        this.num2= y;
    }

    public Summit(){
        this.calculo();
    }

    public imprimirResult(){
        console.log('Resultado '+ (this.total));
    }

    private calculo()
    {
        this.total=0;
        for( let i=0; i < this.num2; i++)
        {
            this.total+= this.num;
            console.log('La operacion:' + (this.total=this.num) + '='+ (this.total));

        }

        this.imprimirResult();

    }

}