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
exports.EmpleadoDistribucion = void 0;
var asalariado_1 = require("./asalariado");
var EmpleadoDistribucion = /** @class */ (function (_super) {
    __extends(EmpleadoDistribucion, _super);
    function EmpleadoDistribucion(p_nombre, p_dni, p_diasVacaciones, p_salarioBase, p_zona) {
        var _this = _super.call(this, p_nombre, p_dni, p_diasVacaciones, p_salarioBase) || this;
        _this.zona = p_zona;
        return _this;
    }
    EmpleadoDistribucion.prototype.getzona = function () {
        return this.zona;
    };
    EmpleadoDistribucion.prototype.setzona = function (p_zona) {
        this.zona = p_zona;
    };
    EmpleadoDistribucion.prototype.getsalario = function () {
        this.salarioBase = this.salarioBase + 1000;
        console.log("El sueldo de un empleado de Distribucion es  " + this.salarioBase);
    };
    return EmpleadoDistribucion;
}(asalariado_1.Asalariado));
exports.EmpleadoDistribucion = EmpleadoDistribucion;
