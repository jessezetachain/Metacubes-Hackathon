
import { of, EMPTY } from "rxjs";
import { ofType } from "redux-observable";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import * as actionTypes from '../types';

import { EpicDependency } from "../../state";
import { ProposalData } from "../../../features/dao/model";
import { connectToWalletFailureAction, connectToWalletSuccessAction } from "../actions";
import { MetaMaskConfig } from "../../../features/auth/services/connection";
/**
 * @param action$
 * @param state$
 * @param dependencies
 */
export const onConnectToWalletRequestEpic = (action$: any, state$: any, dependencies: EpicDependency) =>
    action$.pipe(
        ofType(actionTypes.CONNECT_TO_WALLET_REQUEST),
        map((action: any) => action.payload),
        mergeMap(async (payload: ProposalData) => {
            const config = MetaMaskConfig.getInstance();
            console.log('Connecting to wallet')
            const account = await config.connectToAccount();
            console.log(">>>>>>>>>>>>>>>>>>>>", account)
            return of(connectToWalletSuccessAction(account))
        }),
        catchError((error) => {
            return of(connectToWalletFailureAction(error))
        })

    );

export const onConnectToWalletSuccessEpic = (action$: any, state$: any, dependencies: EpicDependency) =>
    action$.pipe(
        ofType(actionTypes.CONNECT_TO_WALLET_SUCCESS),
        map((action: any) => action.payload),
        
        mergeMap((payload: ProposalData) => {
            return EMPTY;
        })

    );
export const onConnectToWalletFailureEpic = (action$: any, state$: any, dependencies: EpicDependency) =>
    action$.pipe(
        ofType(actionTypes.CONNECT_TO_WALLET_FAILURE),
        map((action: any) => action.payload),
        mergeMap((payload: ProposalData) => {
            return EMPTY;
        })

    );