import { Personne } from './personne';
import { Adresse } from './Adresse';

class ListePersonnes {
    private personnes: Personne[];

    constructor(personnes: Personne[]) {
        this.personnes = personnes;
    }

    //getters
    getPersonnes(): Personne[] {
        return this.personnes;
    }
     
    //setters
    setPersonnes(personnes: Personne[]): void {
        this.personnes = personnes;
    }

    // Trouver une personne par son nom
    findByNom(s: string): Personne | null {
       // return this.personnes.find(personne => personne.getNom() === s) || null;
       return null;
    }

    // Vérifier si une personne a une adresse avec un code postal spécifique
    findByCodePostal(cp: string): boolean {
        return this.personnes.some(personne => 
            personne.getAdresses().some(adresse => adresse.getCodePostal() === cp)
        );
    }

    // Compter le nombre de personnes dans une ville donnée
    countPersonneVille(ville: string): number {
        return this.personnes.filter(personne =>
            personne.getAdresses().some(adresse => adresse.getVille() === ville)
        ).length;
    }
}

// Exemple d'utilisation
const adresse1 = new Adresse("Rue 1", "Casablanca", "20000");
const adresse2 = new Adresse("Rue 2", "Rabat", "10000");
const personne1 = new Personne("Ali", "M", [adresse1]);
const personne2 = new Personne("Fatima", "F", [adresse2]);
const liste = new ListePersonnes([personne1, personne2]);

console.log(liste.findByNom("Ali")); // Trouver par nom
console.log(liste.findByCodePostal("20000")); // Vérifier code postal
console.log(liste.countPersonneVille("Casablanca")); // Compter par ville
