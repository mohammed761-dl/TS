import { Adresse } from './Adresse';

export class Personne {
    private nom: string;
    private sexe: string;
    private adresses: Adresse[];

    constructor(nom: string, sexe: string, adresses: Adresse[]) {
        this.nom = nom;
        this.sexe = sexe;
        this.adresses = adresses;
    }

    // Getters
    getNom(): string {
        return this.nom;
    }

    //setters
    getSexe(): string {
        return this.sexe;
    }

    getAdresses(): Adresse[] {
        return this.adresses;
    }
}
