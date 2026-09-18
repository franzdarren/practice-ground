import express from "express";
import cors from "cors";

class Product {
    constructor(id, name, description, price){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}



var products = [];
const cart = [];

products.push(new Product(1, "Nike", "shoes", "20"));
products.push(new Product(2, "Adidas", "shoes", "30"));
products.push(new Product(3, "NB", "shoes", "10"));

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=> {
    res.end('hello');
})

app.get('/api/hello', (req,res)=> {
    res.end('hello from server');
})

app.get('/api/products/', (req, res) => {
    
    res.json(products)
})

app.post('/api/cart', (req, res) => {

    const productId = req.body.productId;

    console.log("[post] EXPRESS: "+ productId);
    const existing = cart.find(item => item.productId === productId);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ productId, quantity: 1 });
    }

    console.log("CART: "+JSON.stringify(cart))
    res.json(cart);
    
    
    
})

app.get('/api/products/:id', (req, res) => {

    const id = Number(req.params.id);

    if(products.find(p => p.id === id)){
        res.statusCode=200;
        res.json({
            product: products.find(p => p.id === id)
        });
    }
    else{
        res.statusCode=404
        res.json({
            error: "product not found"
        });
    }
    
})


app.listen(3000, () => console.log("listening.. running.."))