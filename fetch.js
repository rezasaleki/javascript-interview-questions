const start = Date.now();
const URL_API_FAKE_1 = 'https://fakestoreapi.com/products';
const URL_API_FAKE_2 = 'https://jsonplaceholder.typicode.com/todos';

console.log('start request ...');

for (let i = 1; i <= 4; i++) {
    fetch(`${URL_API_FAKE_2}/${i}`, {
        headers: {
            "Accept-Language": "en"
        }
    })
    .then(res =>  res.json())
    .finally(() => {
        console.log(`🌐 request ${i} finished after: ${Date.now() - start}ms`);
    })
}

console.log('end request ...');
