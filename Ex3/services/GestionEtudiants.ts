import { Cycle } from "../models/Cycle";
import { Module } from "../models/Module";
import { Etudiant } from "../models/Etudiant";

export class GestionEtudiants {
    constructor(
        public cycles: Cycle[] = [],
        public modules: Module[] = []
    ) {}

    afficherEtudiantsParCycle(nomCycle: string): Etudiant[] {
        const cycle = this.cycles.find(c => c.nom === nomCycle);
        return cycle ? cycle.etudiants : [];
    }

    afficherBulletinEtudiant(cne: string): any {
        for (const cycle of this.cycles) {
            const etudiant = cycle.etudiants.find(e => e.cne === cne);
            if (etudiant) {
                return etudiant.notes;
            }
        }
        return [];
    }

    afficherEtudiantsParModule(nomModule: string): { etudiant: Etudiant; note: number }[] {
        const module = this.modules.find(m => m.nom === nomModule);
        if (!module) return [];

        return module.notes.map(n => ({
            etudiant: n.etudiant,
            note: n.note
        }));
    }
}
