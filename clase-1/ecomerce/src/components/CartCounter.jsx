import { useState } from "react";

function CartCounter({}) {

    const [contador, setContador] = useState(0);

    const incrementar = () => {
        setContador(contador + 1);
        console.log(contador);
    }
   
    return (
        <div>
            <span>Items en carrito:{contador}</span>
            <button onClick={incrementar}>+</button>
        </div>
    )


}
export default CartCounter;