import React from "react";
import '../styleSheet/FormSearch.css'

function FormSearch() {
    return(
        <form className="formContainer">
            <input placeholder="busca un juego" className="formInput" type="text" />
            <button className="formButton">Buscar</button>
        </form>
    )    
}

export default FormSearch