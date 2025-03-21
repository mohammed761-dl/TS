import { Cycle } from "./models/Cycle";
import { Module } from "./models/Module";
import { Etudiant } from "./models/Etudiant";
import { Note } from "./models/Note";
import { GestionEtudiants } from "./services/GestionEtudiants";

// Création des cycles
const cycle1 = new Cycle("Licence", "2024");
const cycle2 = new Cycle("Master", "2025");

// Création des modules
const moduleMath = new Module("Mathématiques", 3);
const moduleInfo = new Module("Informatique", 4);

// Création des étudiants
const etudiant1 = new Etudiant("CNE001", "Ali", cycle1);
const etudiant2 = new Etudiant("CNE002", "Sofia", cycle1);
const etudiant3 = new Etudiant("CNE003", "Karim", cycle2);

// Ajout des étudiants aux cycles
cycle1.etudiants.push(etudiant1, etudiant2);
cycle2.etudiants.push(etudiant3);

// Création des notes
const note1 = new Note(etudiant1, moduleMath, 14.5);
const note2 = new Note(etudiant1, moduleInfo, 16);
const note3 = new Note(etudiant2, moduleMath, 12);
const note4 = new Note(etudiant3, moduleInfo, 17);

// Ajout des notes aux étudiants et aux modules
etudiant1.notes.push(note1, note2);
etudiant2.notes.push(note3);
etudiant3.notes.push(note4);
moduleMath.notes.push(note1, note3);
moduleInfo.notes.push(note2, note4);

// Création de la gestion des étudiants
const gestion = new GestionEtudiants([cycle1, cycle2], [moduleMath, moduleInfo]);

// Affichage des étudiants d’un cycle
console.log("Étudiants en Licence :", gestion.afficherEtudiantsParCycle("Licence"));

// Affichage du bulletin d’un étudiant par CNE
console.log("Bulletin de Ali :", gestion.afficherBulletinEtudiant("CNE001"));

// Affichage des étudiants inscrits à un module spécifique avec leurs notes
console.log("Étudiants en Mathématiques :", gestion.afficherEtudiantsParModule("Mathématiques"));
