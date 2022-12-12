"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccount = void 0;
async function getAccount() {
    if (typeof window !== 'undefined') {
        return await (window.ethereum.selectedAddress);
    }
    else {
        return '';
    }
}
exports.getAccount = getAccount;
