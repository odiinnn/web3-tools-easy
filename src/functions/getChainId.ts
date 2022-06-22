/**
 * 
 * @returns {String} Returns the id of the chain to which the user is connected
 */

function getChainId() {
    if (typeof window !== 'undefined') {
        return (window.ethereum.chainId);
    } else {
        return 'No metamask';
    }
}

export {getChainId};