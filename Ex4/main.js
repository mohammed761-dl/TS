"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var JsonToXmlMapper_1 = require("./services/JsonToXmlMapper");
// Charger le JSON depuis un fichier
var jsonData = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// Définir des règles de transformation
var rules = [
    { sourceField: "nom", targetField: "Nom", transform: function (v) { return v.toUpperCase(); } },
    { sourceField: "age", targetField: "Age", transform: function (v) { return v; } },
    { sourceField: "email", targetField: "Email", transform: function (v) { return v.toLowerCase(); } }
];
// Initialiser le mapper
var mapper = new JsonToXmlMapper_1.JsonToXmlMapper(rules);
// Transformer le JSON en XML
var xmlData = mapper.transform(jsonData);
// Sauvegarder le fichier XML
fs.writeFileSync("output.xml", xmlData, "utf-8");
console.log("Transformation terminée ! Vérifie le fichier output.xml.");
