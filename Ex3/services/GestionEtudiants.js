"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestionEtudiants = void 0;
var GestionEtudiants = /** @class */ (function () {
    function GestionEtudiants(cycles, modules) {
        if (cycles === void 0) { cycles = []; }
        if (modules === void 0) { modules = []; }
        this.cycles = cycles;
        this.modules = modules;
    }
    GestionEtudiants.prototype.afficherEtudiantsParCycle = function (nomCycle) {
        var cycle = this.cycles.find(function (c) { return c.nom === nomCycle; });
        return cycle ? cycle.etudiants : [];
    };
    GestionEtudiants.prototype.afficherBulletinEtudiant = function (cne) {
        for (var _i = 0, _a = this.cycles; _i < _a.length; _i++) {
            var cycle = _a[_i];
            var etudiant = cycle.etudiants.find(function (e) { return e.cne === cne; });
            if (etudiant) {
                return etudiant.notes;
            }
        }
        return [];
    };
    GestionEtudiants.prototype.afficherEtudiantsParModule = function (nomModule) {
        var module = this.modules.find(function (m) { return m.nom === nomModule; });
        if (!module)
            return [];
        return module.notes.map(function (n) { return ({
            etudiant: n.etudiant,
            note: n.note
        }); });
    };
    return GestionEtudiants;
}());
exports.GestionEtudiants = GestionEtudiants;
