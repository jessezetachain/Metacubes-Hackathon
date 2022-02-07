import { ethers } from 'ethers'

declare var window: any;

export class MetaMaskConfig {

    provider: any;
    signer: any;
    ethereum: any;
    static instance: MetaMaskConfig;

    private constructor() {
        this.ethereum = window.ethereum;
        this.provider = new ethers.providers.Web3Provider(window.ethereum);
        this.signer = this.provider.getSigner();
    }
    // function to check if metamask is installed
    public isMetamaskInstalled = () => {
        return this.ethereum.isMetaMask;
    }

    // function to check if metamask is connected to the current chain
    public isMetamaskConnected = () => this.ethereum.isConnected();

    public getChainId = async () => {
        return await this.ethereum.request({ method: 'eth_chainId' })
    }
    
    // function to get metamask networkId
    public getNetworkId = async () => {
        return await this.ethereum.request({ method: 'net_version' })
    }
    
    // function to get metamask account connected with dapp
    public getAccount = async () => {
        try {
            let account = await this.ethereum.request({ method: 'eth_accounts' })
            return account
        } catch (error) {
            console.log('Error getting account:\n', error)
            return error
        }
    }
    
    // function to request metamask to connect with account
    public async connectToAccount() {
        try {
            let account = await this.ethereum.request({ method: 'eth_requestAccounts' })
            return account
        } catch (error) {
            console.log('Error connecting to metamask account:\n', error)
            return error
        }
    }
    
    // function to get the balance of the connected account
    public getBalance = async () => {
        try {
            let account = await this.getAccount()
            if (account.length === 0) {
                return 'Connect to account first!'
            }
    
            let balance = await this.signer.getBalance()
            return ethers.utils.formatEther(balance) + ' ETH'
        } catch (error) {
            console.log('Error getting balance:\n', error)
            return error
        }
    }

    /**
     * 
     */
    public static getInstance(): MetaMaskConfig {
        if(!MetaMaskConfig.instance) {
            MetaMaskConfig.instance = new MetaMaskConfig();
        }
        return MetaMaskConfig.instance;
    }
}
