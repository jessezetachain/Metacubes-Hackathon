import React from 'react'
import Paper from '@mui/material/Paper';
import FormWidget from '../../../ui/compoments/widgets/form';
import ContainerTitle from '../../../ui/compoments/containers/container-title';
import formData from '../../forms/create-proposal.json';
import { VoteData } from '../../model';
import { UiFormData } from '../../../ui/model/form';
interface CreateVoteProps {

}

interface CreateVoteState {

}

class CreateVote extends React.Component<CreateVoteProps, CreateVoteState> {
    constructor(props: CreateVoteProps) {
        super(props);
        this.state = {};
    }

    
    /**
     * 
     * @param data 
     */
    onSubmitSuccess(data: VoteData) { }

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
                    <ContainerTitle>Create Vote</ContainerTitle>
                    <FormWidget
                        formData={formInfo}
                        onSubmitSuccess={this.onSubmitSuccess}
                        onSubmitFailure={this.onSubmitFailure} />
                </Paper>
            </>
        );
    }
}

export default CreateVote;