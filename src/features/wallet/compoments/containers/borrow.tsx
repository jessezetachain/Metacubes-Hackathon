import React from 'react'
import Paper from '@mui/material/Paper';
import formData from '../../forms/borrow.json';
import ContainerTitle from '../../../ui/compoments/containers/container-title';
import FormWidget from '../../../ui/compoments/widgets/form';
import { UiFormData } from '../../../ui/model/form';
import { AppState } from '../../../../redux/state';
import { connect } from 'react-redux';
import { BorrowData } from '../../model';
import { borrowRequestAction } from '../../../../redux/wallet';



interface BorrowContainerProps {
    submit: Function
}

interface BorrowContainerState {
    assetAddress: string;
    amount: number

}

class BorrowContainer extends React.Component<BorrowContainerProps, BorrowContainerState> {
    constructor(props: BorrowContainerProps) {
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
    onSubmitSuccess(data: BorrowData) {
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
                    <ContainerTitle>Borrow</ContainerTitle>
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
    submit: borrowRequestAction
};

export default connect(mapStateToProps, dispatchToProps)(BorrowContainer)