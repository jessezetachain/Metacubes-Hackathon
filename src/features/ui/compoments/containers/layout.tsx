import { ThemeProvider } from '@emotion/react';
import { Copyright } from '@mui/icons-material';


import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {
    Box, CssBaseline, Toolbar, IconButton,
    Typography, Badge, Divider, List, Container, Grid, Paper, createTheme, styled
} from '@mui/material';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import * as React from 'react';
import { mainListItems, secondaryListItems } from './drawer-items';
import { Outlet } from 'react-router-dom';
import { AppState } from '../../../../redux/state';
import { connectToWalletRequestAction } from '../../../../redux/wallet';
import { connect } from 'react-redux';


interface LayoutProps {
    connectToWallet: Function
}

interface LayoutState {
    open: boolean
}

class Layout extends React.Component<LayoutProps, LayoutState> {
    constructor(props: LayoutProps) {
        super(props);
        this.state = {
            open: true
        };
        this.connectToWallet = this.connectToWallet.bind(this);
    }

    toggleDrawer = () => {
        console.log("Toggling")
        const open = this.state.open;
        this.setState({ open: !open })
    };

    connectToWallet() {
        this.props.connectToWallet()
    }

    render() {
        const mdTheme = createTheme();
        const { open } = this.state;
        return (
            <>
                <ThemeProvider theme={mdTheme}>
                    <Box sx={{ display: 'flex' }}>
                        <CssBaseline />
                        <AppBar position="absolute" open={open}>
                            <Toolbar
                                sx={{
                                    pr: '24px', // keep right padding when drawer closed
                                }}
                            >
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={this.toggleDrawer}
                                    sx={{
                                        marginRight: '36px',
                                        ...(open && { display: 'none' }),
                                    }}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography
                                    component="h1"
                                    variant="h6"
                                    color="inherit"
                                    noWrap
                                    sx={{ flexGrow: 1 }}
                                >
                                    Metaverse Wallet
                                </Typography>
                                <Stack direction="row" spacing={2}>
                                    <Button variant="contained" color="secondary" onClick={this.connectToWallet}>Connect To Wallet</Button>
                                </Stack>

                            </Toolbar>
                        </AppBar>
                        <Drawer variant="permanent" open={open}>
                            <Toolbar
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end',
                                    px: [1],
                                }}
                            >
                                <IconButton onClick={this.toggleDrawer}>
                                    <ChevronLeftIcon />
                                </IconButton>
                            </Toolbar>
                            <Divider />
                            <List>{mainListItems}</List>
                            <Divider />
                            <List>{secondaryListItems}</List>
                        </Drawer>
                        <Box
                            component="main"
                            sx={{
                                backgroundColor: (theme) =>
                                    theme.palette.mode === 'light'
                                        ? theme.palette.grey[100]
                                        : theme.palette.grey[900],
                                flexGrow: 1,
                                height: '100vh',
                                overflow: 'auto',
                            }}
                        >
                            <Toolbar />
                            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                                <Outlet />
                                <Copyright sx={{ pt: 4 }} />
                            </Container>
                        </Box>
                    </Box>
                </ThemeProvider>
  );
            </>
        );
    }
}
interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}
const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open', })
    <AppBarProps>(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));
const drawerWidth: number = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

function mapStateToProps(state: AppState) {
    let { address } = state.wallet;
    return { address }
}

const dispatchToProps = {
    connectToWallet: connectToWalletRequestAction
};

export default connect(mapStateToProps, dispatchToProps)(Layout)