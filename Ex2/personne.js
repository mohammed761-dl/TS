"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
var Personne = /** @class */ (function () {
    function Personne(nom, sexe, adresses) {
        this.nom = nom;
        this.sexe = sexe;
        this.adresses = adresses;
    }
    // Getters
    Personne.prototype.getNom = function () {
        return this.nom;
    };
    //setters
    Personne.prototype.getSexe = function () {
        return this.sexe;
    };
    Personne.prototype.getAdresses = function () {
        return this.adresses;
    };
    return Personne;
}());
exports.Personne = Personne;
