import Typography from '@mui/material/Typography';
import React from 'react'

interface ContainerTitleProps {
    children?: React.ReactNode;
}

interface ContainerTitleState {

}

class ContainerTitle extends React.Component<ContainerTitleProps, ContainerTitleState> {
    constructor(props: ContainerTitleProps) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                {this.props.children}
            </Typography>
        );
    }
}

export default ContainerTitle;