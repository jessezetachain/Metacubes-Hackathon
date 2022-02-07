import { combineEpics } from 'redux-observable';
import * as connectEpics from './epics/connect.epics';
import * as disconnectEpics from './epics/disconnect.epics';

export * from './types'
export * from './reducer'
export * from './actions'

export const walletEpics = combineEpics(
    connectEpics.onConnectToWalletRequestEpic,
    connectEpics.onConnectToWalletSuccessEpic,
    connectEpics.onConnectToWalletFailureEpic,
    disconnectEpics.onDisconnectFromWalletRequestEpic,
    disconnectEpics.onDisconnectFromWalletSuccessEpic,
    disconnectEpics.onDisconnectFromWalletFailureEpic
);
