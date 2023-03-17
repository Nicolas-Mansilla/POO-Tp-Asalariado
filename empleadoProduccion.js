"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.EmpleadoProduccion = void 0;
var asalariado_1 = require("./asalariado");
var EmpleadoProduccion = /** @class */ (function (_super) {
    __extends(EmpleadoProduccion, _super);
    function EmpleadoProduccion(p_nombre, p_dni, p_diasVacaciones, p_salarioBase, p_turno) {
        var _this = _super.call(this, p_nombre, p_dni, p_diasVacaciones, p_salarioBase) || this;
        _this.turno = p_turno;
        return _this;
    }
    EmpleadoProduccion.prototype.getturno = function () {
        return this.turno;
    };
    EmpleadoProduccion.prototype.setturno = function (p_turno) {
        this.turno = p_turno;
    };
    EmpleadoProduccion.prototype.getsalario = function () {
        this.salarioBase = this.salarioBase + 200;
        console.log("El sueldo de un empleado de produccion es  " + this.salarioBase);
    };
    return EmpleadoProduccion;
}(asalariado_1.Asalariado));
exports.EmpleadoProduccion = EmpleadoProduccion;
