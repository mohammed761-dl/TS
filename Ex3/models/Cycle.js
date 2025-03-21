"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cycle = void 0;
var Cycle = /** @class */ (function () {
    function Cycle(nom, annee, etudiants) {
        if (etudiants === void 0) { etudiants = []; }
        this.nom = nom;
        this.annee = annee;
        this.etudiants = etudiants;
    }
    return Cycle;
}());
exports.Cycle = Cycle;
