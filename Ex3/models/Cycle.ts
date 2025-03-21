import { Etudiant } from "./Etudiant";

export class Cycle {
    constructor(
        public nom: string,
        public annee: string,
        public etudiants: Etudiant[] = []
    ) {}
}
