"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccount = void 0;
function getAccount() {
    if (typeof window !== 'undefined') {
        return (window.ethereum.selectedAddress);
    }
    else {
        return '';
    }
}
exports.getAccount = getAccount;
