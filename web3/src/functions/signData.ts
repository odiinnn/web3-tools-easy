/**
 * 
 * @param data The line to be signed
 * @param address User address
 * @returns Returns the hash of the signed string if the signature succeeded, or the empty string if it failed
 */

async function signData(data: string, address: string): Promise<string> {
    if (typeof window !== 'undefined') {
        const transactionHash = await window.ethereum.request({
            method: 'personal_sign',
            params: [
                address,
                data
            ]
        });
        if (transactionHash) {
            return transactionHash;
        } else {
            return '';
        }
    } else {
        return 'No metamask';
    }
}

export {signData};