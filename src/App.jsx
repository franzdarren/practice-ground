import { useState } from 'react';
import './App.css';

import ShoppingCard from './components/ShoppingCard.jsx';
import Cart from './components/Cart.jsx';

function App() {
  let [cart, setCart] = useState([]);
  let total = cart.reduce((acc, item) => acc + item.price, 0);
  function addToCart(product){
    console.log("add to cart: ", product);
    setCart(currentCart => {
      return [...currentCart, product];
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
          <ShoppingCard id={1} name="Nike" description="shoes" price={9000} onAddToCart={addToCart}/>
          <ShoppingCard id={2} name="Adidas" description="shoes" price={22323} onAddToCart={addToCart}/>
          <ShoppingCard id={3} name="NB" description="shoes" price={3333} onAddToCart={addToCart}/>
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