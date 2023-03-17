import { Asalariado } from './asalariado';
import { EmpleadoProduccion } from './empleadoProduccion';
import { EmpleadoDistribucion } from './empleadoDistribucion';



let asalariado1:Asalariado= new Asalariado("Hugo",75567365,25,700000);
let empleadoProduccion1:EmpleadoProduccion=new EmpleadoProduccion("Mati",34565212,15,150000,"mañana");
let empleadoDistribucion1:EmpleadoDistribucion=new EmpleadoDistribucion("Sonia",23544744,21,200000,"zona oeste");

console.log(asalariado1);
console.log(empleadoProduccion1);
console.log(empleadoDistribucion1);


asalariado1.getsalario();
empleadoProduccion1.getsalario();
empleadoDistribucion1.getsalario();

console.log(asalariado1);
console.log(empleadoProduccion1);
console.log(empleadoDistribucion1);



