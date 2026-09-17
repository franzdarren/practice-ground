

function ShoppingCard({id, name = "samplename", description, price, onAddToCart}) {
  function handleAddToCart(){
    console.log("adsdw");
    onAddToCart({
      id,
      name,
      description,
      price
    })
  }
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px' }}>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>PHP {price}</p>
        <button onClick={handleAddToCart}>ADD TO CART</button>
    </div>
  )
}

export default ShoppingCard

