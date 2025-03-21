"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var personne_1 = require("./personne");
var Adresse_1 = require("./Adresse");
var ListePersonnes = /** @class */ (function () {
    function ListePersonnes(personnes) {
        this.personnes = personnes;
    }
    //getters
    ListePersonnes.prototype.getPersonnes = function () {
        return this.personnes;
    };
    //setters
    ListePersonnes.prototype.setPersonnes = function (personnes) {
        this.personnes = personnes;
    };
    // Trouver une personne par son nom
    ListePersonnes.prototype.findByNom = function (s) {
        // return this.personnes.find(personne => personne.getNom() === s) || null;
        return null;
    };
    // Vérifier si une personne a une adresse avec un code postal spécifique
    ListePersonnes.prototype.findByCodePostal = function (cp) {
        return this.personnes.some(function (personne) {
            return personne.getAdresses().some(function (adresse) { return adresse.getCodePostal() === cp; });
        });
    };
    // Compter le nombre de personnes dans une ville donnée
    ListePersonnes.prototype.countPersonneVille = function (ville) {
        return this.personnes.filter(function (personne) {
            return personne.getAdresses().some(function (adresse) { return adresse.getVille() === ville; });
        }).length;
    };
    return ListePersonnes;
}());
// Exemple d'utilisation
var adresse1 = new Adresse_1.Adresse("Rue 1", "Casablanca", "20000");
var adresse2 = new Adresse_1.Adresse("Rue 2", "Rabat", "10000");
var personne1 = new personne_1.Personne("Ali", "M", [adresse1]);
var personne2 = new personne_1.Personne("Fatima", "F", [adresse2]);
var liste = new ListePersonnes([personne1, personne2]);
console.log(liste.findByNom("Ali")); // Trouver par nom
console.log(liste.findByCodePostal("20000")); // Vérifier code postal
console.log(liste.countPersonneVille("Casablanca")); // Compter par ville
