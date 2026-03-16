import {useRef} from "react";

function SearchInput({placeholder = "Buscar..."}) {
    const inputRef = useRef(null);
    console.log(inputRef);
const handleFocusSearch = () => {
    inputRef.current.focus();
}

    <div>
        <input type="text" placeholder={placeholder} aria-level = "Buscar" 
         ref={inputRef}
        />

        <button onClick={handleFocusSearch}>Evocar busqueda</button>
       
    </div>

}

export default SearchInput;