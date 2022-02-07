import React from 'react'
import Paper from '@mui/material/Paper';
import FormWidget from '../../../ui/compoments/widgets/form';
import ContainerTitle from '../../../ui/compoments/containers/container-title';
import formData from '../../forms/create-proposal.json';
import { UiFormData } from '../../../ui/model/form';
import { ProposalData } from '../../model';

interface CreateProposalProps {

}

interface CreateProposalState {

}

class CreateProposal extends React.Component<CreateProposalProps, CreateProposalState> {
    constructor(props: CreateProposalProps) {
        super(props);
        this.state = {};
    }
    
    /**
     * 
     * @param data 
     */
    onSubmitSuccess(data: ProposalData) { }

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
                    <ContainerTitle>Create Proposal</ContainerTitle>
                    <FormWidget
                        formData={formInfo}
                        onSubmitSuccess={this.onSubmitSuccess}
                        onSubmitFailure={this.onSubmitFailure} />
                </Paper>
            </> 
        );
    }
}

export default CreateProposal;