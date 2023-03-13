import TestimonioUsuarios from "./componentesExtra/TestimonioUsuarios"
import '../Styles/Testimonios.css'
import Logo from "./componentesExtra/Logo";

function Testimonios() {
  return (
    <div className="conTest">
      <div className="contenedorPrincipal">
        <Logo/>
        <h1>Esto dicen los Usuarios:</h1>
        <TestimonioUsuarios/>
      </div>
    </div>
  );
}

export default Testimonios;
