import * as fs from "fs";
import { JsonToXmlMapper } from "./services/JsonToXmlMapper";
import { TransformationRule } from "./models/TransformationRule";

// Charger le JSON depuis un fichier
const jsonData = JSON.parse(fs.readFileSync("data.json", "utf-8"));

// Définir des règles de transformation
const rules: TransformationRule[] = [
    { sourceField: "nom", targetField: "Nom", transform: (v) => v.toUpperCase() },
    { sourceField: "age", targetField: "Age", transform: (v) => v },
    { sourceField: "email", targetField: "Email", transform: (v) => v.toLowerCase() }
];

// Initialiser le mapper
const mapper = new JsonToXmlMapper(rules);

// Transformer le JSON en XML
const xmlData = mapper.transform(jsonData);

// Sauvegarder le fichier XML
fs.writeFileSync("output.xml", xmlData, "utf-8");

console.log("Transformation terminée ! Vérifie le fichier output.xml.");
