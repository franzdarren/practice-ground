import http from 'node:http';

class Product {
    constructor(id, name, description, price){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}

const nike = new Product(1, "Nike", "shoes", "20");
const adidas = new Product(2, "Adidas", "shoes", "30");
const nb = new Product(3, "NB", "shoes", "10");

var products = [];

products.push(nike, adidas, nb);

http.createServer((req, res) => {
    console.log(req.method, req.url);

    if (req.url === '/') {
    res.end("hello /");
}
else if (req.url === '/api/products') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(products));
}
else if (req.url.startsWith('/api/products/')) {
    const id = parseInt(req.url.split('/')[3], 10);
    const product = products.find(p => p.id === id);

    if (product) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(product));
    } else {
        res.statusCode = 404;
        res.end('product not found');
    }
}
else {
    res.statusCode = 404;
    res.end('not found');
}
}).listen(3000, () => {
  console.log('listening on http://localhost:3000');
});
