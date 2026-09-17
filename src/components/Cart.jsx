function Cart({cart}) {
  return (
    <ul>
        {cart.map(cartItem => (
            <li key={cartItem.id}>
                {cartItem.name} | PHP {cartItem.price} | Quantity: {cartItem.quantity}
            </li>
            ))}
        </ul>
  )
}

export default Cart