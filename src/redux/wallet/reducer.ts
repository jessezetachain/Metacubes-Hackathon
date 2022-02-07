import * as ACTION_TYPES from './types'
import type * as ACTIONS from './actions'
import { WalletState } from '../state';


type ValueOf<T> = T[keyof T];
export type ActionsType = ValueOf<{[k in keyof typeof ACTIONS]: ReturnType<typeof ACTIONS[k]>}>


const initialState: WalletState = {
	address: '',
	isConnected: false
}


export const walletReducer = (state: WalletState = initialState, action: ActionsType): WalletState => {
	switch (action.type) {
case ACTION_TYPES.CONNECT_TO_WALLET_REQUEST: return {
			...state,
		}
		case ACTION_TYPES.CONNECT_TO_WALLET_SUCCESS: return {
			...state,
		}
		case ACTION_TYPES.CONNECT_TO_WALLET_FAILURE: return {
			...state,
		}
		case ACTION_TYPES.DISCONNECT_FROM_WALLET_REQUEST: return {
			...state,
		}
		case ACTION_TYPES.DISCONNECT_FROM_WALLET_SUCCESS: return {
			...state,
		}
		case ACTION_TYPES.DISCONNECT_FROM_WALLET_FAILURE: return {
			...state,
		}
		case ACTION_TYPES.DEPOSIT_REQUEST: return {
			...state,
		}
		case ACTION_TYPES.DEPOSIT_SUCCESS: return {
			...state,
		}
		case ACTION_TYPES.DEPOSIT_FAILURE: return {
			...state,
		}
		case ACTION_TYPES.WITHDRAW_REQUEST: return {
			...state,
		}
		case ACTION_TYPES.WITHDRAW_SUCCESS: return {
			...state,
		}
		case ACTION_TYPES.WITHDRAW_FAILURE: return {
			...state,
		}
		case ACTION_TYPES.TRANSFER_REQUEST: return {
			...state,
		}
		case ACTION_TYPES.TRANSFER_SUCCESS: return {
			...state,
		}
		case ACTION_TYPES.TRANSFER_FAILURE: return {
			...state,
		}
		case ACTION_TYPES.BORROW_REQUEST: return {
			...state,
		}
		case ACTION_TYPES.BORROW_SUCCESS: return {
			...state,
		}
		case ACTION_TYPES.BORROW_FAILURE: return {
			...state,
		}
		case ACTION_TYPES.SWAP_REQUEST: return {
			...state,
		}
		case ACTION_TYPES.SWAP_SUCCESS: return {
			...state,
		}
		case ACTION_TYPES.SWAP_FAILURE: return {
			...state,
		}
		default: return state;
	}
}
