# web3-tools-easy

Some simple tools for Web3/Metamask

Install with npm

```bash
npm install identix-sso-client-js
```

## Usage/Examples


```javascript
import {connect, signData, getChainId, getAccount} from 'web3-tools-easy';

const connection = await connect();

const userAccount = getAccount();

const connectedChainId = getChainId();

const dataToSign = 'Random string to sign';
const signDataHash = signData(dataToSign, userAccount);
```
