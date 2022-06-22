"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signData = void 0;
async function signData(data, address) {
    if (typeof window !== 'undefined') {
        const transactionHash = await window.ethereum.request({
            method: 'personal_sign',
            params: [
                address,
                data
            ]
        });
        if (transactionHash) {
            return transactionHash;
        }
        else {
            return '';
        }
    }
    else {
        return 'No metamask';
    }
}
exports.signData = signData;
