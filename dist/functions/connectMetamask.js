"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
async function connect() {
    if (typeof window !== 'undefined') {
        return await (window.ethereum.request({
            method: 'eth_requestAccounts'
        }));
    }
    else {
        return '';
    }
}
exports.connect = connect;
