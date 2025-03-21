class Point {
    private ord: number;
    private abs: number;

    constructor(ord: number, abs: number) {
       this.abs = abs;
       this.ord = ord;
    }
    
    public getAbs(): number {
        return this.abs;
    }

    public getOrd(): number {
        return this.ord;
    }

    public setAbs(abs: number): void {
        this.abs = abs;
    }

    public setOrd(ord: number): void {
        this.ord = ord;
    }
    
    public calculerDistance(p: Point): number {
        return Math.sqrt(Math.pow(this.abs - p.getAbs(), 2) + Math.pow(this.ord - p.getOrd(), 2));
    }
}

// Création de deux points
const p1 = new Point(3, 4);
const p2 = new Point(6, 8);

// Affichage du résultat avec la bonne syntaxe
console.log(`Distance : ${p1.calculerDistance(p2)}`);
