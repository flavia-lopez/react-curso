import Cards from "./Cards"


function ProductCard({ name, price, onAddToCart, children }) {
  return (
    <Cards title={name}>
      {children}
      <p>Price: ${price}</p>
      <button onClick={onAddToCart}>Agregar al carrito</button>
    </Cards>
  )
}

export default ProductCard