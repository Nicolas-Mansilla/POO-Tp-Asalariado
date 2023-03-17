

export class Asalariado {
    protected nombre:string;
    protected dni:number;
    protected diasVacaciones:number;
    protected salarioBase:number;

    constructor(p_nombre:string,p_dni:number,p_diasVacaciones:number,p_salarioBase:number){
        this.nombre=p_nombre;
        this.dni=p_dni;
        this.diasVacaciones=p_diasVacaciones;
        this.salarioBase=p_salarioBase;
    }

    public getnombre():string{
        return this.nombre;
    }
    public setnombre(p_nombre):void{
        this.nombre=p_nombre
    }

    public getdni():number{
        return this.dni;
    }
    public setdni(p_dni):void{
        this.dni=p_dni
    }
    public getdiasVacaciones():number{
        return this.diasVacaciones;
    }
    public setdiasVacaciones(p_diasVacaciones):void{
        this.diasVacaciones=p_diasVacaciones
    }

    public getsalario():void{
        this.salarioBase=this.salarioBase;
        console.log("El sueldo de asalariado es "+this.salarioBase);
    }
   
}