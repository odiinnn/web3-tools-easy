interface AddEthereumChainParameter {
    chainId: string; // A 0x-prefixed hexadecimal string
    chainName: string;
    nativeCurrency: {
      name: string;
      symbol: string; // 2-6 characters long
      decimals: 18;
    };
    rpcUrls: string[];
    blockExplorerUrls?: string[];
    iconUrls?: string[]; // Currently ignored.
  }

  /**
   * 
   * @param account User account address
   * @param params Chains params {AddEthereumChainParameter}
   * @returns True - if the chain was added, false - if not
   */

function addNetwork(account: string, params: AddEthereumChainParameter): boolean {
    
    try {
        window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [params, account]
        }).then((result: string) => {
            return true
        }).catch((error: string) => {
            return false
        });
    } catch(error) {
        return false
    }

};

export {addNetwork};
