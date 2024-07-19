const { Buffer } = require('buffer');

export const encrypt = (str) => Buffer.from(str).toString('base64');

export const decrypt = (str) => Buffer.from(str, 'base64').toString('utf8');


export const chunkArray = (array, chunkSize) => {
    if (chunkSize <= 0) {
        throw new Error('Chunk size must be greater than zero');
    }

    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
}
