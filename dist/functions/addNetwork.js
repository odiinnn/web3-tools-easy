"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNetwork = void 0;
function addNetwork(account, params) {
    try {
        window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [params, account]
        }).then((result) => {
            return true;
        }).catch((error) => {
            return false;
        });
    }
    catch (error) {
        return false;
    }
}
exports.addNetwork = addNetwork;
;
