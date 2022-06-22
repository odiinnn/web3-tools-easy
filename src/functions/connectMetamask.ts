/**
 * 
 * @returns {String} Return empty string if user reject connection request
 */
function connect(): string {
    if (typeof window !== 'undefined') {
        return (window.ethereum.request({
            method: 'eth_requestAccounts'
        }));
    } else {
        return '';
    }
}

export {connect};