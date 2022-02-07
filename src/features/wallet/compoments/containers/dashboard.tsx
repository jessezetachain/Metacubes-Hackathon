import React from 'react'
import Paper from '@mui/material/Paper';
import { AppState } from '../../../../redux/state';
import { connect } from 'react-redux';
import ContainerTitle from '../../../ui/compoments/containers/container-title';


interface DashboardContainerProps {

}

interface DashboardContainerState {

}

class DashboardContainer extends React.Component<DashboardContainerProps, DashboardContainerState> {
    constructor(props: DashboardContainerProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <ContainerTitle>Dashboard</ContainerTitle>
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
};

export default connect(mapStateToProps, dispatchToProps)(DashboardContainer)