import { TransformationRule } from "../models/TransformationRule";

export class JsonToXmlMapper {
    constructor(private rules: TransformationRule[]) {}

    transform(jsonData: any): string {
        let xml = `<root>\n`;

        for (const rule of this.rules) {
            if (jsonData[rule.sourceField] !== undefined) {
                const transformedValue = rule.transform(jsonData[rule.sourceField]);
                xml += `  <${rule.targetField}>${transformedValue}</${rule.targetField}>\n`;
            }
        }

        xml += `</root>`;
        return xml;
    }
}
