import { IServiceExecutor, IServiceRepository } from "@alstradocs/service-objects";


export interface EpicDependency {
	store?: any;
	serviceExecutor: IServiceExecutor | undefined;
}

export interface AppState {
    dao: DaoState;
    wallet: WalletState;
}

export interface DaoState {

}

export interface WalletState {
    address: string
    isConnected: boolean;
}
