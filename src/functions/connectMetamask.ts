/**
 * 
 * @returns {String} Return empty string if user reject connection request
 */
async function connect(): Promise<string> {
    if (typeof window !== 'undefined') {
        return await (window.ethereum.request({
            method: 'eth_requestAccounts'
        }));
    } else {
        return '';
    }
}

export {connect};