import { BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom"
import Testimonios from "./componentes/Testimonios";
import ContadorClicks from "./componentes/ContadorClicks";
import Calculadora from "./componentes/Calculadora";
import ListaDeTareas from "./componentes/ListaDeTareas";
import "./Styles/menu.css"


function App() {
  return (
    <div>
      <Router>
          <nav className="menu">
              <NavLink className="enlace" activeClassName to="/">Testimonios</NavLink>
              <NavLink className="enlace" activeClassName to="/contador">Contador</NavLink>
              <NavLink className="enlace" activeClassName to="/calculadora">Calculadora</NavLink>
              <NavLink className="enlace" activeClassName to="/lista">Lista de Tareas</NavLink>
          </nav>
          <Routes>
            <Route index element={<Testimonios/>}/>
            <Route path="contador" element={<ContadorClicks/>}/>
            <Route path="calculadora" element={<Calculadora/>}/>
            <Route path="lista" element={<ListaDeTareas/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
