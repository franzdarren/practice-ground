import React from 'react'
import ShoppingCard from './ShoppingCard'

export default function ProductList({products, onAddToCart}) {
  return (
    <>
    <h2>Products</h2>
    <div className="product-grid">
        {
            products.map(
                product=>(
                    <ShoppingCard key={product.id} id={product.id} name={product.name} description={product.description} price={product.price} onAddToCart={onAddToCart}/>
                )
            )
        }
    </div>
    </>
  )
}
