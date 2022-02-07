
import { of, EMPTY } from "rxjs";
import { ofType } from "redux-observable";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import * as actionTypes from '../types';

import { EpicDependency } from "../../state";
import { ProposalData } from "../../../features/dao/model";
import { disconnectFromWalletFailureAction, disconnectFromWalletSuccessAction } from "../actions";
/**
 * @param action$
 * @param state$
 * @param dependencies
 */
export const onDisconnectFromWalletRequestEpic = (action$: any, state$: any, dependencies: EpicDependency) =>
    action$.pipe(
        ofType(actionTypes.DISCONNECT_FROM_WALLET_REQUEST),
        map((action: any) => action.payload),
        mergeMap((payload: ProposalData) => {
            const { serviceExecutor, store } = dependencies;
            return of(disconnectFromWalletSuccessAction(payload))
        }),
        catchError((error) => {
            return of(disconnectFromWalletFailureAction(error))
        })

    );

export const onDisconnectFromWalletSuccessEpic = (action$: any, state$: any, dependencies: EpicDependency) =>
    action$.pipe(
        ofType(actionTypes.DISCONNECT_FROM_WALLET_SUCCESS),
        map((action: any) => action.payload),
        mergeMap((payload: ProposalData) => {
            return EMPTY;
        })

    );
export const onDisconnectFromWalletFailureEpic = (action$: any, state$: any, dependencies: EpicDependency) =>
    action$.pipe(
        ofType(actionTypes.DISCONNECT_FROM_WALLET_FAILURE),
        map((action: any) => action.payload),
        mergeMap((payload: ProposalData) => {
            return EMPTY;
        })

    );