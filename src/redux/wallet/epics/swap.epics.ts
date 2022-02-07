
import { of, EMPTY } from "rxjs";
import { ofType } from "redux-observable";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import * as actionTypes from '../types';

import { EpicDependency } from "../../state";
import { ProposalData } from "../../../features/dao/model";
import { swapFailureAction, swapSuccessAction } from "../actions";
/**
 * @param action$
 * @param state$
 * @param dependencies
 */
export const onSwapRequestEpic = (action$: any, state$: any, dependencies: EpicDependency) =>
    action$.pipe(
        ofType(actionTypes.SWAP_REQUEST),
        map((action: any) => action.payload),
        mergeMap((payload: ProposalData) => {
            const { serviceExecutor, store } = dependencies;
            return of(swapSuccessAction(payload))
        }),
        catchError((error) => {
            return of(swapFailureAction(error))
        })

    );

export const onSwapSuccessEpic = (action$: any, state$: any, dependencies: EpicDependency) =>
    action$.pipe(
        ofType(actionTypes.SWAP_SUCCESS),
        map((action: any) => action.payload),
        mergeMap((payload: ProposalData) => {
            return EMPTY;
        })

    );
export const onSwapFailureEpic = (action$: any, state$: any, dependencies: EpicDependency) =>
    action$.pipe(
        ofType(actionTypes.SWAP_FAILURE),
        map((action: any) => action.payload),
        mergeMap((payload: ProposalData) => {
            return EMPTY;
        })

    );