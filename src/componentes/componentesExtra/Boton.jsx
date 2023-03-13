import React from "react";
import "../../Styles/Boton.css"

function Boton({texto, botonDeClick, manejarClick}){
    return (
        <button 
            className={ botonDeClick ? "botonClick" : "botonReiniciar" }
            onClick={manejarClick}>
                {texto}
        </button>
    )
}

export default Boton;