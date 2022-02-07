import React from 'react'
import Paper from '@mui/material/Paper';
import formData from '../../forms/deposit.json';
import ContainerTitle from '../../../ui/compoments/containers/container-title';
import FormWidget from '../../../ui/compoments/widgets/form';
import { UiFormData } from '../../../ui/model/form';
import { AppState } from '../../../../redux/state';
import { connect } from 'react-redux';
import { DepositData } from '../../model';
import { connectToWalletRequestAction, depositRequestAction } from '../../../../redux/wallet';


interface DepositContainerProps {
    submit: Function,

}

interface DepositContainerState {
    assetAddress: string;
    amount: number
}

class DepositContainer extends React.Component<DepositContainerProps, DepositContainerState> {
    constructor(props: DepositContainerProps) {
        super(props);
        this.state = {
            assetAddress: '',
            amount: 0
        };
        this.onSubmitSuccess = this.onSubmitSuccess.bind(this);
        /* const config = MetaMaskConfig.getInstance();
        console.log(config)
        // check if metamask is installed in browser
        if (config.isMetamaskInstalled()) {
            console.log('Metamask is installed!')
        }
        else {
            alert('Install Metamask extension to connect with DApp!')
        }

        const checkOnLoad = async () => {
            await config.connectToAccount()
        }
        
        (async () => await checkOnLoad())(); */
    }

    
    /**
     * 
     * @param data 
     */
    onSubmitSuccess(data: DepositData) {
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
                    <ContainerTitle>Deposit</ContainerTitle>
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
    submit: depositRequestAction,
};

export default connect(mapStateToProps, dispatchToProps)(DepositContainer)