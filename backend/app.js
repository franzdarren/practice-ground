import express from 'express';

class Product {
    constructor(id, name, description, price){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}



var products = [];

products.push(new Product(1, "Nike", "shoes", "20"));
products.push(new Product(2, "Adidas", "shoes", "30"));
products.push(new Product(3, "NB", "shoes", "10"));

const app = express();

app.listen(3000, () => console.log("listening.."))

app.get('/api/products/:id', (req, res) => {

    const id = Number(req.params.id);

    res.json({
        hello: "test",
        id: id,
        product: products.find(p => p.id === id)
    });
})