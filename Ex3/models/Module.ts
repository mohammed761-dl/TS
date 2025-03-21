import { Note } from "./Note";

export class Module {
    constructor(
        public nom: string,
        public coef: number,
        public notes: Note[] = []
    ) {}
}
