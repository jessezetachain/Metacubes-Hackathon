import * as ACTION_TYPES from './types'
import type * as ACTIONS from './actions'
import { FetchingType, createDefault, createFetching, createSuccess, createError } from '../common';


type ValueOf<T> = T[keyof T];
export type ActionsType = ValueOf<{[k in keyof typeof ACTIONS]: ReturnType<typeof ACTIONS[k]>}>


export type initialStateType = {
	fetching:{
		createProposal: FetchingType,
		executeProposal: FetchingType,
		cancelProposal: FetchingType,
		voteOnProposal: FetchingType
	}
};

const initialState: initialStateType = {
	fetching:{
		createProposal: createDefault(),
		executeProposal: createDefault(),
		cancelProposal: createDefault(),
		voteOnProposal: createDefault()
	}
}


export const daoReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
	switch (action.type) {
case ACTION_TYPES.LIST_PROPOSALS_REQUEST: return {
			...state,
		}
		case ACTION_TYPES.LIST_PROPOSALS_SUCCESS: return {
			...state,
		}
		case ACTION_TYPES.LIST_PROPOSALS_FAILURE: return {
			...state,
		}
		case ACTION_TYPES.CREATE_PROPOSAL_REQUEST: return {
			...state,
		}
		case ACTION_TYPES.CREATE_PROPOSAL_SUCCESS: return {
			...state,
		}
		case ACTION_TYPES.CREATE_PROPOSAL_FAILURE: return {
			...state,
		}
		case ACTION_TYPES.EXECUTE_PROPOSAL_REQUEST: return {
			...state,
		}
		case ACTION_TYPES.EXECUTE_PROPOSAL_SUCCESS: return {
			...state,
		}
		case ACTION_TYPES.EXECUTE_PROPOSAL_FAILURE: return {
			...state,
		}
		case ACTION_TYPES.CANCEL_PROPOSAL_REQUEST: return {
			...state,
		}
		case ACTION_TYPES.CANCEL_PROPOSAL_SUCCESS: return {
			...state,
		}
		case ACTION_TYPES.CANCEL_PROPOSAL_FAILURE: return {
			...state,
		}
		case ACTION_TYPES.VOTE_ON_PROPOSAL_REQUEST: return {
			...state,
		}
		case ACTION_TYPES.VOTE_ON_PROPOSAL_SUCCESS: return {
			...state,
		}
		case ACTION_TYPES.VOTE_ON_PROPOSAL_FAILURE: return {
			...state,
		}
		default: return state;
	}
}
