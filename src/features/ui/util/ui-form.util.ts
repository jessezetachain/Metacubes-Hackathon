import { LegendToggleRounded } from "@mui/icons-material";
import { UiFieldData, UiFormData, UiGridData } from "../model/form";

export class UiFormUtils {
    /**
     * 
     * @param formData 
     */
    static getData(formData: UiFormData): any {
        const { fields } = formData;
        const data: any = {}
        fields.map((uiFieldData: UiFieldData) => {
            
            if(uiFieldData.value !== undefined)
                data[uiFieldData.name] = uiFieldData.value;
        });
        return data
    }

    static getGridData(uiFieldData: UiFieldData): UiGridData {
        let gridData: UiGridData = {
            xs: 12,
            sm: 12
        };

        const { grid } = uiFieldData;
        
        if (grid !== undefined) {
            gridData = {...gridData, ...grid};
        }
        return gridData;
    }
    public static beforeRenderForm(formData: UiFormData): UiFormData{
        return formData;
    }
}