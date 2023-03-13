import React from "react";
import  "../../Styles/Testimonios.css"
import testimoniosUsuarios from "../../recursos/testimoniosUsuarios";


function Testimonio() {
    return (
        <>
            {
                testimoniosUsuarios.map(({nombre, pais, imagen, cargo, empresa, testimonio}, index)=> (  
                    <div key= {index} className="contenedorPrincipalTestimonio">
                    
                        <img className="imgUsuario"
                             src={require (`../../imagenes/${imagen}.jpg`)}
                             alt= {`foto ${imagen}`}/>
                        <div className="contenedorTestimonio">
                            <p className="nombrePaisTestimonio"><strong>{nombre}</strong> en {pais}</p>
                            <p className="cargoEmpresaTestimonio">{cargo} en <strong>{empresa}</strong></p>
                            <p className="textoTestimonio">"{testimonio}"</p>
                        </div>
               
                    </div>
                ))
            }
        </>
    )
}

export default Testimonio;