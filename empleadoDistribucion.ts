import { Asalariado } from "./asalariado";

export class EmpleadoDistribucion extends Asalariado{
    private zona :string;


    constructor(p_nombre:string,p_dni:number,p_diasVacaciones:number,p_salarioBase:number,p_zona:string){
      super(p_nombre,p_dni,p_diasVacaciones,p_salarioBase)
      this.zona=p_zona;
    }

    public getzona():string{
        return this.zona;
    }
    public setzona(p_zona):void{
        this.zona=p_zona;
    }

    
    public getsalario ():void{
    this.salarioBase=this.salarioBase+1000;
    console.log("El sueldo de un empleado de Distribucion es  "+ this.salarioBase);
    }
}


