"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cycle_1 = require("./models/Cycle");
var Module_1 = require("./models/Module");
var Etudiant_1 = require("./models/Etudiant");
var Note_1 = require("./models/Note");
var GestionEtudiants_1 = require("./services/GestionEtudiants");
// Création des cycles
var cycle1 = new Cycle_1.Cycle("Licence", "2024");
var cycle2 = new Cycle_1.Cycle("Master", "2025");
// Création des modules
var moduleMath = new Module_1.Module("Mathématiques", 3);
var moduleInfo = new Module_1.Module("Informatique", 4);
// Création des étudiants
var etudiant1 = new Etudiant_1.Etudiant("CNE001", "Ali", cycle1);
var etudiant2 = new Etudiant_1.Etudiant("CNE002", "Sofia", cycle1);
var etudiant3 = new Etudiant_1.Etudiant("CNE003", "Karim", cycle2);
// Ajout des étudiants aux cycles
cycle1.etudiants.push(etudiant1, etudiant2);
cycle2.etudiants.push(etudiant3);
// Création des notes
var note1 = new Note_1.Note(etudiant1, moduleMath, 14.5);
var note2 = new Note_1.Note(etudiant1, moduleInfo, 16);
var note3 = new Note_1.Note(etudiant2, moduleMath, 12);
var note4 = new Note_1.Note(etudiant3, moduleInfo, 17);
// Ajout des notes aux étudiants et aux modules
etudiant1.notes.push(note1, note2);
etudiant2.notes.push(note3);
etudiant3.notes.push(note4);
moduleMath.notes.push(note1, note3);
moduleInfo.notes.push(note2, note4);
// Création de la gestion des étudiants
var gestion = new GestionEtudiants_1.GestionEtudiants([cycle1, cycle2], [moduleMath, moduleInfo]);
// Affichage des étudiants d’un cycle
console.log("Étudiants en Licence :", gestion.afficherEtudiantsParCycle("Licence"));
// Affichage du bulletin d’un étudiant par CNE
console.log("Bulletin de Ali :", gestion.afficherBulletinEtudiant("CNE001"));
// Affichage des étudiants inscrits à un module spécifique avec leurs notes
console.log("Étudiants en Mathématiques :", gestion.afficherEtudiantsParModule("Mathématiques"));
