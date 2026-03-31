import { useRef } from "react";

function SearchInput({placeholder = "Buscar..."}) {
    const inputRef = useRef(null);


const handleFocusSearch = () => {
    inputRef.current.focus();
}

return (
    <div>
        <input 
        type="text" 
        placeholder={placeholder} 
        aria-label = "Buscar" 
         ref={inputRef}
        />

        <button onClick={handleFocusSearch}>Enfocar busqueda</button>
       
    </div>
)



}

export default SearchInput;