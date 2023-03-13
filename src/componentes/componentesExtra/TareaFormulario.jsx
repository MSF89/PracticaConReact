import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario (props) {

    const [input, setInput] = useState ('')

    const manejarCambio = e => {
        setInput(e.target.value)
    }

    const manejarEnvio = e => {
        e.preventDefault()
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva);
    }
    return (
        <form className="tareaFormulario" onSubmit={manejarEnvio}>
            <input className="tareaInput" type='texto' placeholder='Escriba una tarea' name='texto' onChange={manejarCambio}/>
            <button className="tareaBoton">Agregar Tarea</button>
        </form>
    )
}

export default TareaFormulario;