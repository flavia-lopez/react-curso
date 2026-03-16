//import { useState } from "react";//
//import Saludo from "./Saludo.jsx";//
import CartCounter from "./components/CartCounter.jsx";
import "./app.css";
import Cards from "./components/Cards.jsx";


function App() {
  //const estado = useState(0);
 // const [contador, setContador] = useState(0); //desestructuramos el array que devuelve useState//
  //console.log(estado);

  //let contador = 0;  no usamos variables//
 //const incrementar = () => {
  //console.log(contador);//
  //setContador(contador+ 1);
  //contador++;//
  //console.log(contador);
  

  return (
    <>


    <Cards title="Mi primera tarjeta">
      <p>Este es el contenido de la tarjeta.</p>
      <button>Accion</button>

  
    </Cards>

    <Cards title="Mi segunda tarjeta">

      <div>
       <p>Este es el contenido de la segunda tarjeta.</p>
          
      <ul>
        <li>Elemento 1</li>
        <li>Elemento 2</li>
      </ul>

      </div>
      
      

    </Cards>

    <CartCounter/>

    </>

    
  
  
  )

}











export default App
