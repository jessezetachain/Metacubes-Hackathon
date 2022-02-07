export interface UiFormData {
    name: string;
    displayName: string;
    fields: UiFieldData[];
}

export interface UiFieldData {
    name: string;
    label: string;
    value: any;
    type: string;
    placeholder: string;
    grid?: UiGridData;
}

export interface UiGridData {
    xs: number;
    sm: number;
}