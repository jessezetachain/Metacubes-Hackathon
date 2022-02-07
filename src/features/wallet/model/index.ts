export interface DepositData {
    assetAddress: string;
    amount: number
}

export interface WithdrawData {
    assetAddress: string;
    amount: number
}

export interface TransferData {
    assetAddress: string;
    receiverAddress: string;
    amount: number
}

export interface BorrowData {
    assetAddress: string;
    amount: number
}

export interface SwapData {
    assetInAddress: string;
    assetOutAddress: string;
    amount: number
}