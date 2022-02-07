import React from 'react'
import Paper from '@mui/material/Paper';
import FormWidget from '../../../ui/compoments/widgets/form';
import ContainerTitle from '../../../ui/compoments/containers/container-title';


interface ProposalDetailsProps {

}

interface ProposalDetailsState {

}

class ProposalDetails extends React.Component<ProposalDetailsProps, ProposalDetailsState> {
    constructor(props: ProposalDetailsProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <ContainerTitle>Proposal Details</ContainerTitle>
                </Paper>
            </>
        );
    }
}

export default ProposalDetails;