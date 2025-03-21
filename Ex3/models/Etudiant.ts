import { Cycle } from "./Cycle";
import { Note } from "./Note";

export class Etudiant {
    constructor(
        public cne: string,
        public nom: string,
        public cycle: Cycle,
        public notes: Note[] = []
    ) {}
}
