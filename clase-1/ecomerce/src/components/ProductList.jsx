import React from 'react'

const products = [
    { id: 1, name: "Maceta ceramica", price: 10.99 },
    { id: 2, name: "Maceta plastica", price: 15.99 },
    { id: 3, name: "Maceta madera", price: 20.99 }
]

function ProductList({handleAddToCart}) {
  const [products] = useState(products);

  return (
    <div className='product-list'>
        {products.map((item) => (
            <ProductCard
            key={item.id}
            name={item.name}
            price={item.price}
            onAddToCart={() => console.log(`Agregado ${item.name} al carrito`)}
            >
                <p>Producto id: {item.id}</p>
            </ProductCard>
        ))}

    </div>

    )
}

export default ProductList