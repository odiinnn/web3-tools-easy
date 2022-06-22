/**
 * 
 * @returns {String} Return user account address or empty string if account is not connected
 */

function getAccount(): string {
    if (typeof window !== 'undefined') {
        return (window.ethereum.selectedAddress);
    } else {
        return '';
    }
}

export {getAccount};