import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { UiFormUtils } from '../../util/ui-form.util';
import { UiFieldData, UiFormData } from '../../model/form';
import Button from '@mui/material/Button';


interface FormWidgetProps {
    formData: UiFormData;
    onSubmitSuccess: Function;
    onSubmitFailure: Function;
}

interface FormWidgetState {
    data: any

}

class FormWidget extends React.Component<FormWidgetProps, FormWidgetState> {
    constructor(props: FormWidgetProps) {
        super(props);
        this.state = { data: {} };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    /**
     * Function to handle on click event on form button
     * @param event 
     */
    handleSubmit(event: any) {
        event.preventDefault();
        let { data } = this.state;
        this.props.onSubmitSuccess(data);
    }

    handleOnClick(uiFieldName: string) {
        return (event: any) => {
            let { data } = this.state;
            data[uiFieldName] = event.target.value;
            console.log('State', data, uiFieldName, event.target.value)
            this.setState({ data }); 
        }
    }

    render() {
        const formData = this.props.formData;
        const { fields } = UiFormUtils.beforeRenderForm(formData);
        return (
            <>
                <React.Fragment>

                    <Grid container spacing={3}>
                        {
                            fields.map((uiFieldData, index) => {
                                const { xs, sm } = UiFormUtils.getGridData(uiFieldData);
                                console.log({ xs, sm })

                                return (
                                    <Grid key={uiFieldData.name} item xs={xs} sm={sm}>
                                        { this.renderField(uiFieldData)}
                                    </Grid>
                                )
                            })
                        }
                        <Grid item xs={12}>
                            <Button variant="text" onClick={this.handleSubmit}>Submit</Button>
                        </Grid>
                    </Grid>
                </React.Fragment>
            </>
        );
    }

    renderField(uiFieldData: UiFieldData) {

        if (uiFieldData.type === 'TextField') {
            return (
                <TextField
                    id={uiFieldData.name}
                    name={uiFieldData.name}
                    label={uiFieldData.label}
                    fullWidth
                    defaultValue={uiFieldData.placeholder}
                    onChange={this.handleOnClick(uiFieldData.name)}
                    variant="standard"
                />
            );
        }
        else if (uiFieldData.type === 'PasswordField') {
            return (
                <TextField
                    id={uiFieldData.name}
                    name={uiFieldData.name}
                    label={uiFieldData.label}
                    fullWidth
                    defaultValue={uiFieldData.placeholder}
                    onChange={this.handleOnClick(uiFieldData.name)}
                    variant="standard"
                />

            );
        }
        else {
            return (
                <TextField
                    id={uiFieldData.name}
                    name={uiFieldData.name}
                    label={uiFieldData.label}
                    fullWidth
                    defaultValue={uiFieldData.placeholder}
                    onChange={this.handleOnClick(uiFieldData.name)}
                    variant="standard"
                />
            );
        }
    }

}

export default FormWidget;