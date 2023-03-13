import Logo from "./componentesExtra/Logo";
import TareasLista from "./componentesExtra/TareasLista";
import "../Styles/ListaTareas.css"

function ListaDeTareas() {
    return (
        <div className="listaDeTareas">
            <Logo/>
            <div className="ListaTareasPrincipal">
                <h1>Mis Tareas</h1>
                <TareasLista/>
            </div>
        </div>
    )
}

export default ListaDeTareas;