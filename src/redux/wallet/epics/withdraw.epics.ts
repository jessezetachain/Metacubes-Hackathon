
import { of, EMPTY } from "rxjs";
import { ofType } from "redux-observable";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import * as actionTypes from '../types';

import { EpicDependency } from "../../state";
import { ProposalData } from "../../../features/dao/model";
import { withdrawFailureAction, withdrawSuccessAction } from "../actions";
/**
 * @param action$
 * @param state$
 * @param dependencies
 */
export const onWithdrawRequestEpic = (action$: any, state$: any, dependencies: EpicDependency) =>
    action$.pipe(
        ofType(actionTypes.WITHDRAW_REQUEST),
        map((action: any) => action.payload),
        mergeMap((payload: ProposalData) => {
            const { serviceExecutor, store } = dependencies;
            return of(withdrawSuccessAction(payload))
        }),
        catchError((error) => {
            return of(withdrawFailureAction(error))
        })

    );

export const onWithdrawSuccessEpic = (action$: any, state$: any, dependencies: EpicDependency) =>
    action$.pipe(
        ofType(actionTypes.WITHDRAW_REQUEST),
        map((action: any) => action.payload),
        mergeMap((payload: ProposalData) => {
            return EMPTY;
        })

    );
export const onWithdrawFailureEpic = (action$: any, state$: any, dependencies: EpicDependency) =>
    action$.pipe(
        ofType(actionTypes.WITHDRAW_REQUEST),
        map((action: any) => action.payload),
        mergeMap((payload: ProposalData) => {
            return EMPTY;
        })

    );