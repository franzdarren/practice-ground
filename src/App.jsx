import { useState } from 'react';
import './App.css';
import ShoppingCard from './components/ShoppingCard.jsx';
import Cart from './components/Cart.jsx';

function App() {
  let [cart, setCart] = useState([]);
  let total = cart.reduce((acc, item) => acc + item.price*item.quantity, 0);
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

  
  return(
    <main className="app-layout">
      <section className="info-container">
        <h1>Shopping App</h1>
        <p>Total: PHP {total}</p>
        <p>Things in cart: {cart.length}</p>
      </section>

      <section className="shopping-container">
        <h2>Products</h2>
        <div className="product-grid">
          <ShoppingCard id={1} name="Nike" description="shoes" price={5} onAddToCart={addToCart}/>
          <ShoppingCard id={2} name="Adidas" description="shoes" price={10} onAddToCart={addToCart}/>
          <ShoppingCard id={3} name="NB" description="shoes" price={2} onAddToCart={addToCart}/>
        </div>
      </section>

      <section className="cart-container">
        <h2>Cart</h2>
          <Cart cart={cart}/>
      </section>
    </main>
  )
}

export default App;