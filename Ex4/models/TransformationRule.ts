export interface TransformationRule {
    sourceField: string;
    targetField: string;
    transform: (value: any) => any;
}
