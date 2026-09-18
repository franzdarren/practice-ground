function Cart({cart, onDecreaseQuantity}) {
  return (
    <ul>
        {cart.map(cartItem => (
            <li key={cartItem.id}>
                {cartItem.name} | PHP {cartItem.price} | Quantity: {cartItem.quantity}
                <span
                  onClick={() => onDecreaseQuantity(cartItem.id)}
                  style={{ textDecoration: 'underline', cursor: 'pointer' }}
                >
                    X
                </span>
            </li>
            ))}
        </ul>
  )
}

export default Cart