import { useState } from "react";
//import Saludo from "./Saludo.jsx";//
import CartCounter from "./components/CartCounter.jsx";
import "./app.css";
import Cards from "./components/Cards.jsx";
import SearchInput from "./components/searchinput.jsx";
import ProductList from "./components/ProductList.jsx";


function App() {

const [cartItems, setCartItems] = useState([]);

function handleAddToCart(product) {
  setCartItems((prev) => [...prev, product]);
  

  return (
    <>
    <div className="app">
      <header>
        <h1>Pulso Suculento</h1>
        <p>Bienvenidos a nuestra tienda en linea</p>

        <Cards title="Busqueda">
 
    <SearchInput />
  
    </Cards>

    <Cards title="Carrito de compras">
            <
              p>Items en el carrito: {cartItems.length}</p
            >
    </Cards>

      </header>

    </div>

    <main>
      <ProductList  onAddToCart={handleAddToCart}/>
    </main>
    




    

    </>


    
  
  
  )

}
}











export default App
