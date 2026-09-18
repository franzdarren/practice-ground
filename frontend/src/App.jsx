import { useState, useEffect } from 'react';
import './App.css';
import ShoppingCard from './components/ShoppingCard.jsx';
import Cart from './components/Cart.jsx';
import ProductList from './components/ProductList.jsx';

function App() {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState('fetching from server...');
  const [products, setProducts] = useState([]);//will store products fetched from server

  let total = cart.reduce((acc, item) => acc + item.price*item.quantity, 0);

  useEffect(() => {
    fetch('http://localhost:3000/api/hello')
      .then(res => res.text())
      .then(text => setMessage(text));
  }, []);

  useEffect(() => {
  fetch('http://localhost:3000/api/products/')
    .then(res => res.json())
    .then(products => setProducts(products));
}, []);


  function addToCart(product){
    setCart(currentCart => {
      const existingProduct = currentCart.find(
        cartProduct => cartProduct.id === product.id
      );

      if (existingProduct){
        return currentCart.map(cartProduct => {
        if (cartProduct.id === product.id) {
          return {
            ...cartProduct, quantity: cartProduct.quantity + 1
          };
        }

        return cartProduct;
      });
      }
      return [
      ...currentCart,
      {
        ...product,
        quantity: 1
      }
    ];

    })
  }

  function decreaseQuantity(productId){
    setCart(currentCart => {
      return currentCart
        .map(cartItem => {
          if (cartItem.id === productId) {
            return {
              ...cartItem,
              quantity: cartItem.quantity - 1
            };
          }

          return cartItem;
        })
        .filter(cartItem => cartItem.quantity > 0);
    });
  }

  
  return(
    <main className="app-layout">
      <p>debug log: {JSON.stringify(products)}</p>
      <section className="info-container">
        <h1>Shopping App</h1>
        <p>message from server: {message}</p>
        <p>Total: PHP {total}</p>
        <p>Things in cart (unique): {cart.length}</p>
        <p>Things in cart (all): {cart.reduce((acc, item) => acc + item.quantity, 0)}</p>
      </section>

      <section className="shopping-container">
        <h2>Products</h2>
        <ProductList products={products} onAddToCart={addToCart} />
      </section>

      <section className="cart-container">
        <h2>Cart</h2>
          <Cart cart={cart} onDecreaseQuantity={decreaseQuantity}/>
      </section>
    </main>
  )
}

export default App;