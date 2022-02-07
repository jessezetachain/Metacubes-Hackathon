import * as ACTION_TYPES from './types'

export const createProposalRequestAction = () => {
	return ({
		type: ACTION_TYPES.CREATE_PROPOSAL_REQUEST as typeof ACTION_TYPES.CREATE_PROPOSAL_REQUEST,
	})
}

export const createProposalSuccessAction = (payload: any) => {
	return ({
		type: ACTION_TYPES.CREATE_PROPOSAL_SUCCESS as typeof ACTION_TYPES.CREATE_PROPOSAL_SUCCESS,
		payload
	})
}

export const createProposalFailureAction = (error: any) => {
	return ({
		type: ACTION_TYPES.CREATE_PROPOSAL_FAILURE as typeof ACTION_TYPES.CREATE_PROPOSAL_FAILURE,
		error
	})
}

export const executeProposalRequestAction = () => {
	return ({
		type: ACTION_TYPES.EXECUTE_PROPOSAL_REQUEST as typeof ACTION_TYPES.EXECUTE_PROPOSAL_REQUEST,
	})
}

export const executeProposalSuccessAction = (payload: any) => {
	return ({
		type: ACTION_TYPES.EXECUTE_PROPOSAL_SUCCESS as typeof ACTION_TYPES.EXECUTE_PROPOSAL_SUCCESS,
		payload
	})
}

export const executeProposalFailureAction = (error: any) => {
	return ({
		type: ACTION_TYPES.EXECUTE_PROPOSAL_FAILURE as typeof ACTION_TYPES.EXECUTE_PROPOSAL_FAILURE,
		error
	})
}

export const cancelProposalRequestAction = () => {
	return ({
		type: ACTION_TYPES.CANCEL_PROPOSAL_REQUEST as typeof ACTION_TYPES.CANCEL_PROPOSAL_REQUEST,
	})
}

export const cancelProposalSuccessAction = (payload: any) => {
	return ({
		type: ACTION_TYPES.CANCEL_PROPOSAL_SUCCESS as typeof ACTION_TYPES.CANCEL_PROPOSAL_SUCCESS,
		payload
	})
}

export const cancelProposalFailureAction = (error: any) => {
	return ({
		type: ACTION_TYPES.CANCEL_PROPOSAL_FAILURE as typeof ACTION_TYPES.CANCEL_PROPOSAL_FAILURE,
		error
	})
}

export const voteOnProposalRequestAction = () => {
	return ({
		type: ACTION_TYPES.VOTE_ON_PROPOSAL_REQUEST as typeof ACTION_TYPES.VOTE_ON_PROPOSAL_REQUEST,
	})
}

export const voteOnProposalSuccessAction = (payload: any) => {
	return ({
		type: ACTION_TYPES.VOTE_ON_PROPOSAL_SUCCESS as typeof ACTION_TYPES.VOTE_ON_PROPOSAL_SUCCESS,
		payload
	})
}

export const voteOnProposalFailureAction = (error: any) => {
	return ({
		type: ACTION_TYPES.VOTE_ON_PROPOSAL_FAILURE as typeof ACTION_TYPES.VOTE_ON_PROPOSAL_FAILURE,
		error
	})
}

export const listProposalsRequestAction = () => {
	return ({
		type: ACTION_TYPES.LIST_PROPOSALS_REQUEST as typeof ACTION_TYPES.LIST_PROPOSALS_REQUEST,
	})
}

export const listProposalsSuccessAction = (payload: any) => {
	return ({
		type: ACTION_TYPES.LIST_PROPOSALS_SUCCESS as typeof ACTION_TYPES.LIST_PROPOSALS_SUCCESS,
		payload
	})
}

export const listProposalsFailureAction = (error: any) => {
	return ({
		type: ACTION_TYPES.LIST_PROPOSALS_FAILURE as typeof ACTION_TYPES.LIST_PROPOSALS_FAILURE,
		error
	})
}
