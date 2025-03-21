import { Etudiant } from "./Etudiant";
import { Module } from "./Module";

export class Note {
    constructor(
        public etudiant: Etudiant,
        public module: Module,
        public note: number
    ) {}
}
