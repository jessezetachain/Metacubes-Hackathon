
import { of, EMPTY } from "rxjs";
import { ofType } from "redux-observable";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import * as actionTypes from '../types';

import { EpicDependency } from "../../state";
import { ProposalData } from "../../../features/dao/model";
import { depositFailureAction, depositSuccessAction } from "../actions";
/**
 * @param action$
 * @param state$
 * @param dependencies
 */
export const onDepositRequestEpic = (action$: any, state$: any, dependencies: EpicDependency) =>
    action$.pipe(
        ofType(actionTypes.DEPOSIT_REQUEST),
        map((action: any) => action.payload),
        mergeMap((payload: ProposalData) => {
            const { serviceExecutor, store } = dependencies;
            return of(depositSuccessAction(payload))
        }),
        catchError((error) => {
            return of(depositFailureAction(error))
        })

    );

export const onDepositSuccessEpic = (action$: any, state$: any, dependencies: EpicDependency) =>
    action$.pipe(
        ofType(actionTypes.DEPOSIT_REQUEST),
        map((action: any) => action.payload),
        mergeMap((payload: ProposalData) => {
            return EMPTY;
        })

    );
export const onDepositFailureEpic = (action$: any, state$: any, dependencies: EpicDependency) =>
    action$.pipe(
        ofType(actionTypes.DEPOSIT_REQUEST),
        map((action: any) => action.payload),
        mergeMap((payload: ProposalData) => {
            return EMPTY;
        })

    );