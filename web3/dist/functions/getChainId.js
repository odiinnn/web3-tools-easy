"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChainId = void 0;
function getChainId() {
    if (typeof window !== 'undefined') {
        return (window.ethereum.chainId);
    }
    else {
        return 'No metamask';
    }
}
exports.getChainId = getChainId;
