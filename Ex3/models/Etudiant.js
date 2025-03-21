"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Etudiant = void 0;
var Etudiant = /** @class */ (function () {
    function Etudiant(cne, nom, cycle, notes) {
        if (notes === void 0) { notes = []; }
        this.cne = cne;
        this.nom = nom;
        this.cycle = cycle;
        this.notes = notes;
    }
    return Etudiant;
}());
exports.Etudiant = Etudiant;
