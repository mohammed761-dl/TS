"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Module = void 0;
var Module = /** @class */ (function () {
    function Module(nom, coef, notes) {
        if (notes === void 0) { notes = []; }
        this.nom = nom;
        this.coef = coef;
        this.notes = notes;
    }
    return Module;
}());
exports.Module = Module;
