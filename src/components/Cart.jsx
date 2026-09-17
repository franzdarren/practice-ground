function Cart({cart}) {
  return (
    <ul>
        {cart.map((cart)=> <li key={cart.id}>{cart.id} | {cart.name} | {cart.price}</li>)}
    </ul>
  )
}

export default Cart