import { Asalariado } from "./asalariado";

export class EmpleadoProduccion extends Asalariado{
    private turno :string;


    constructor(p_nombre:string,p_dni:number,p_diasVacaciones:number,p_salarioBase:number,p_turno:string){
      super(p_nombre,p_dni,p_diasVacaciones,p_salarioBase)
      this.turno=p_turno;
    }

    public getturno():string{
        return this.turno;
    }
    public setturno(p_turno):void{
        this.turno=p_turno
    }

   
    public getsalario ():void{
    this.salarioBase=this.salarioBase+200;
    console.log("El sueldo de un empleado de produccion es  "+ this.salarioBase);
    }
}