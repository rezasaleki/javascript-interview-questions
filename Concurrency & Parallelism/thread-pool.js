const { pbkdf2 } = require('crypto');
const start = Date.now();

// libuv 
process.env.UV_THREADPOOL_SIZE = 2;

function runCrypto(index) {
    pbkdf2('secret', 'salt', 1000000, 64, 'sha512', (err, key) => {
        console.log(`Operation ${index} finished after ${Date.now() - start}ms`);
    });
}

runCrypto(1);
runCrypto(2);
runCrypto(3);
runCrypto(4);