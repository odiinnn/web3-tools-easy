/**
 * 
 * @returns {String} Return user account address or empty string if account is not connected
 */

async function getAccount(): Promise<string> {
    if (typeof window !== 'undefined') {
        return await (window.ethereum.selectedAddress);
    } else {
        return '';
    }
}

export {getAccount};