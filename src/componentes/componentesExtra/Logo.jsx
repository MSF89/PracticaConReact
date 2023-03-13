import logo from "../../imagenes/alien.png"
import "../../Styles/Logo.css"

const Logo  = () => (   
    <div className="logoContenedor">
        <img className="logo" src={logo} alt="logo"/>
    </div>  
)

export default Logo;
