import * as fromModel from '../../features/wallet/model'
import * as ACTION_TYPES from './types'

export const depositRequestAction = (payload: fromModel.DepositData) => {
	return ({
		type: ACTION_TYPES.DEPOSIT_REQUEST as typeof ACTION_TYPES.DEPOSIT_REQUEST,
		payload
	})
}

export const depositSuccessAction = (payload: any) => {
	return ({
		type: ACTION_TYPES.DEPOSIT_SUCCESS as typeof ACTION_TYPES.DEPOSIT_SUCCESS,
		payload
	})
}

export const depositFailureAction = (error: any) => {
	return ({
		type: ACTION_TYPES.DEPOSIT_FAILURE as typeof ACTION_TYPES.DEPOSIT_FAILURE,
		error
	})
}

export const withdrawRequestAction = (payload: fromModel.WithdrawData) => {
	return ({
		type: ACTION_TYPES.WITHDRAW_REQUEST as typeof ACTION_TYPES.WITHDRAW_REQUEST,
		payload
	})
}

export const withdrawSuccessAction = (payload: any) => {
	return ({
		type: ACTION_TYPES.WITHDRAW_SUCCESS as typeof ACTION_TYPES.WITHDRAW_SUCCESS,
		payload
	})
}

export const withdrawFailureAction = (error: any) => {
	return ({
		type: ACTION_TYPES.WITHDRAW_FAILURE as typeof ACTION_TYPES.WITHDRAW_FAILURE,
		error
	})
}

export const transferRequestAction = (payload: fromModel.TransferData) => {
	return ({
		type: ACTION_TYPES.TRANSFER_REQUEST as typeof ACTION_TYPES.TRANSFER_REQUEST,
		payload
	})
}

export const transferSuccessAction = (payload: any) => {
	return ({
		type: ACTION_TYPES.TRANSFER_SUCCESS as typeof ACTION_TYPES.TRANSFER_SUCCESS,
		payload
	})
}

export const transferFailureAction = (error: any) => {
	return ({
		type: ACTION_TYPES.TRANSFER_FAILURE as typeof ACTION_TYPES.TRANSFER_FAILURE,
		error
	})
}

export const borrowRequestAction = (payload: fromModel.BorrowData) => {
	return ({
		type: ACTION_TYPES.BORROW_REQUEST as typeof ACTION_TYPES.BORROW_REQUEST,
		payload
	})
}

export const borrowSuccessAction = (payload: any) => {
	return ({
		type: ACTION_TYPES.BORROW_SUCCESS as typeof ACTION_TYPES.BORROW_SUCCESS,
		payload
	})
}

export const borrowFailureAction = (error: any) => {
	return ({
		type: ACTION_TYPES.BORROW_FAILURE as typeof ACTION_TYPES.BORROW_FAILURE,
		error
	})
}

export const swapRequestAction = (payload: fromModel.SwapData) => {
	return ({
		type: ACTION_TYPES.SWAP_REQUEST as typeof ACTION_TYPES.SWAP_REQUEST,
		payload
	})
}

export const swapSuccessAction = (payload: any) => {
	return ({
		type: ACTION_TYPES.SWAP_SUCCESS as typeof ACTION_TYPES.SWAP_SUCCESS,
		payload
	})
}

export const swapFailureAction = (error: any) => {
	return ({
		type: ACTION_TYPES.SWAP_FAILURE as typeof ACTION_TYPES.SWAP_FAILURE,
		error
	})
}

export const connectToWalletRequestAction = () => {
	return ({
		type: ACTION_TYPES.CONNECT_TO_WALLET_REQUEST as typeof ACTION_TYPES.CONNECT_TO_WALLET_REQUEST,
	})
}

export const connectToWalletSuccessAction = (payload: any) => {
	return ({
		type: ACTION_TYPES.CONNECT_TO_WALLET_SUCCESS as typeof ACTION_TYPES.CONNECT_TO_WALLET_SUCCESS,
		payload
	})
}

export const connectToWalletFailureAction = (error: any) => {
	return ({
		type: ACTION_TYPES.CONNECT_TO_WALLET_FAILURE as typeof ACTION_TYPES.CONNECT_TO_WALLET_FAILURE,
		error
	})
}

export const disconnectFromWalletRequestAction = () => {
	return ({
		type: ACTION_TYPES.DISCONNECT_FROM_WALLET_REQUEST as typeof ACTION_TYPES.DISCONNECT_FROM_WALLET_REQUEST,
	})
}

export const disconnectFromWalletSuccessAction = (payload: any) => {
	return ({
		type: ACTION_TYPES.DISCONNECT_FROM_WALLET_SUCCESS as typeof ACTION_TYPES.DISCONNECT_FROM_WALLET_SUCCESS,
		payload
	})
}

export const disconnectFromWalletFailureAction = (error: any) => {
	return ({
		type: ACTION_TYPES.DISCONNECT_FROM_WALLET_FAILURE as typeof ACTION_TYPES.DISCONNECT_FROM_WALLET_FAILURE,
		error
	})
}
