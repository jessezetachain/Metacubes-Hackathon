import React from 'react'
import Paper from '@mui/material/Paper';
import formData from '../../forms/transfer.json';
import ContainerTitle from '../../../ui/compoments/containers/container-title';
import FormWidget from '../../../ui/compoments/widgets/form';
import { UiFormData } from '../../../ui/model/form';
import { AppState } from '../../../../redux/state';
import { connect } from 'react-redux';
import { TransferData } from '../../model';
import { transferRequestAction } from '../../../../redux/wallet';



interface TransferContainerProps {
    submit: Function

}

interface TransferContainerState {
    assetAddress: string;
    receiverAddress: string;
    amount: number

}

class TransferContainer extends React.Component<TransferContainerProps, TransferContainerState> {
    constructor(props: TransferContainerProps) {
        super(props);
        this.state = {
            assetAddress: '',
            receiverAddress: '',
            amount: 0
        };
        this.onSubmitSuccess = this.onSubmitSuccess.bind(this);
    }
    /**
     * 
     * @param data 
     */
    onSubmitSuccess(data: TransferData) {
        this.props.submit(data);

     }

    /**
     * 
     * @param error 
     */
    onSubmitFailure(error: any) { }

    render() {
        const formInfo = formData as UiFormData;
        return (
            <>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <ContainerTitle>Transfer</ContainerTitle>
                    <FormWidget
                        formData={formInfo}
                        onSubmitSuccess={this.onSubmitSuccess}
                        onSubmitFailure={this.onSubmitFailure} />
                </Paper>
            </>
        );
    }
}

function mapStateToProps(state: AppState) {
    let { address } = state.wallet;
    return { address }
}

const dispatchToProps = {
    submit: transferRequestAction
};

export default connect(mapStateToProps, dispatchToProps)(TransferContainer)