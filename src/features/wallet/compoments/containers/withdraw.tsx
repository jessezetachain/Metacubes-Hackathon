import React from 'react'
import Paper from '@mui/material/Paper';
import formData from '../../forms/withdraw.json';
import ContainerTitle from '../../../ui/compoments/containers/container-title';
import FormWidget from '../../../ui/compoments/widgets/form';
import { UiFormData } from '../../../ui/model/form';
import { AppState } from '../../../../redux/state';
import { connect } from 'react-redux';
import { WithdrawData } from '../../model';
import { withdrawRequestAction } from '../../../../redux/wallet';



interface WithdrawContainerProps {
    submit: Function
}

interface WithdrawContainerState {
    assetAddress: string;
    amount: number

}

class WithdrawContainer extends React.Component<WithdrawContainerProps, WithdrawContainerState> {
    constructor(props: WithdrawContainerProps) {
        super(props);
        this.state = {
            assetAddress: '',
            amount: 0
        };
        this.onSubmitSuccess = this.onSubmitSuccess.bind(this);
    }

    /**
     * 
     * @param data 
     */
    onSubmitSuccess(data: WithdrawData) {
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
                    <ContainerTitle>Withdraw</ContainerTitle>
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
    submit: withdrawRequestAction
};

export default connect(mapStateToProps, dispatchToProps)(WithdrawContainer)