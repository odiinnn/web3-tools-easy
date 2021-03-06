# web3-tools-easy

Some simple tools for Web3/Metamask

Install with npm

```bash
npm i web3-tools-easy
```

## Usage/Examples


```javascript
import {connect, signData, getChainId, getAccount} from 'web3-tools-easy';

const connection = await connect();

const userAccount = getAccount();

const connectedChainId = getChainId();

const dataToSign = 'Random string to sign';
const signDataHash = signData(dataToSign, userAccount);

const params = {
    chainId: '0x89',
    chainName: 'Polygon',
    nativeCurrency: {
        name: 'MATIC',
        symbol: 'MATIC',
        decimals: 18
    },
    rpcUrls: ['https://polygon-rpc.com/', 'https://rpc-mainnet.matic.network', 'https://matic-mainnet.chainstacklabs.com', 'https://rpc-mainnet.maticvigil.com', 'https://rpc-mainnet.matic.quiknode.pro', 'https://matic-mainnet-full-rpc.bwarelabs.com'],
    blockExplorerUrls: ['https://polygonscan.com']
};

const addNetwork = addNetwork(userAccount, params)
```
