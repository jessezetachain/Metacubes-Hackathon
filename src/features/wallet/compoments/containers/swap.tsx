import React from 'react'
import Paper from '@mui/material/Paper';
import formData from '../../forms/swap.json';
import ContainerTitle from '../../../ui/compoments/containers/container-title';
import FormWidget from '../../../ui/compoments/widgets/form';
import { UiFormData } from '../../../ui/model/form';
import { AppState } from '../../../../redux/state';
import { connect } from 'react-redux';
import { SwapData } from '../../model';
import { swapRequestAction } from '../../../../redux/wallet';



interface SwapContainerProps {
    submit: Function

}

interface SwapContainerState {
    assetInAddress: string;
    assetOutAddress: string;
    amount: number

}

class SwapContainer extends React.Component<SwapContainerProps, SwapContainerState> {
    constructor(props: SwapContainerProps) {
        super(props);
        this.state = {
            assetInAddress: '',
            assetOutAddress: '',
            amount: 0
        };
        this.onSubmitSuccess = this.onSubmitSuccess.bind(this);
    }
    /**
     * 
     * @param data 
     */
    onSubmitSuccess(data: SwapData) {
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
                    <ContainerTitle>Swap</ContainerTitle>
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
    submit: swapRequestAction
};

export default connect(mapStateToProps, dispatchToProps)(SwapContainer)