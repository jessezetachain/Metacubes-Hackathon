
import { of, EMPTY } from "rxjs";
import { ofType } from "redux-observable";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";
import * as actionTypes from '../types';

import { EpicDependency } from "../../state";
import { ProposalData } from "../../../features/dao/model";
import { createProposalFailureAction, createProposalSuccessAction } from "../actions";
/**
 * @param action$
 * @param state$
 * @param dependencies
 */
export const onCreateProposalRequestEpic = (action$: any, state$: any, dependencies: EpicDependency) =>
    action$.pipe(
        ofType(actionTypes.CREATE_PROPOSAL_REQUEST),
        map((action: any) => action.payload),
        mergeMap((payload: ProposalData) => {
            const { serviceExecutor, store } = dependencies;
            return of(createProposalSuccessAction(payload))
        }),
        catchError((error) => {
            return of(createProposalFailureAction(error))
        })

    );

export const onCreateProposalSuccessEpic = (action$: any, state$: any, dependencies: EpicDependency) =>
    action$.pipe(
        ofType(actionTypes.CREATE_PROPOSAL_REQUEST),
        map((action: any) => action.payload),
        mergeMap((payload: ProposalData) => {
            return EMPTY;
        })

    );
export const onCreateProposalFailureEpic = (action$: any, state$: any, dependencies: EpicDependency) =>
    action$.pipe(
        ofType(actionTypes.CREATE_PROPOSAL_REQUEST),
        map((action: any) => action.payload),
        mergeMap((payload: ProposalData) => {
            return EMPTY;
        })

    );