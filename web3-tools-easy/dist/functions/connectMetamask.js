"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
function connect() {
    if (typeof window !== 'undefined') {
        return (window.ethereum.request({
            method: 'eth_requestAccounts'
        }));
    }
    else {
        return '';
    }
}
exports.connect = connect;
