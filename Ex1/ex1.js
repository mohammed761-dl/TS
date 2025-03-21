var Point = /** @class */ (function () {
    function Point(ord, abs) {
        this.abs = abs;
        this.ord = ord;
    }
    Point.prototype.getAbs = function () {
        return this.abs;
    };
    Point.prototype.getOrd = function () {
        return this.ord;
    };
    Point.prototype.setAbs = function (abs) {
        this.abs = abs;
    };
    Point.prototype.setOrd = function (ord) {
        this.ord = ord;
    };
    Point.prototype.calculerDistance = function (p) {
        return Math.sqrt(Math.pow(this.abs - p.getAbs(), 2) + Math.pow(this.ord - p.getOrd(), 2));
    };
    return Point;
}());
// Création de deux points
var p1 = new Point(3, 4);
var p2 = new Point(6, 8);
// Affichage du résultat avec la bonne syntaxe
console.log("Distance : ".concat(p1.calculerDistance(p2)));
