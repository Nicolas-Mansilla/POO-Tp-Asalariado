"use strict";
exports.__esModule = true;
exports.Asalariado = void 0;
var Asalariado = /** @class */ (function () {
    function Asalariado(p_nombre, p_dni, p_diasVacaciones, p_salarioBase) {
        this.nombre = p_nombre;
        this.dni = p_dni;
        this.diasVacaciones = p_diasVacaciones;
        this.salarioBase = p_salarioBase;
    }
    Asalariado.prototype.getnombre = function () {
        return this.nombre;
    };
    Asalariado.prototype.setnombre = function (p_nombre) {
        this.nombre = p_nombre;
    };
    Asalariado.prototype.getdni = function () {
        return this.dni;
    };
    Asalariado.prototype.setdni = function (p_dni) {
        this.dni = p_dni;
    };
    Asalariado.prototype.getdiasVacaciones = function () {
        return this.diasVacaciones;
    };
    Asalariado.prototype.setdiasVacaciones = function (p_diasVacaciones) {
        this.diasVacaciones = p_diasVacaciones;
    };
    Asalariado.prototype.getsalario = function () {
        this.salarioBase = this.salarioBase;
        console.log("El sueldo de asalariado es " + this.salarioBase);
    };
    return Asalariado;
}());
exports.Asalariado = Asalariado;
