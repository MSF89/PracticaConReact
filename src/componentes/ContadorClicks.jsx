import '../Styles/ContadorClicks.css';
import Boton from './componentesExtra/Boton';
import Contador from './componentesExtra/Contador';
import { useState } from 'react';
import Logo from './componentesExtra/Logo';


function ContadorClicks() {

  const [numClics, setNumClics] = useState(0);

  const manejarClick = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }
  return (
    <div className="contadorClicks">
      <Logo/>
      <div className="contenedorPrincipalContador">
        <Contador numClics={numClics} />
        <Boton 
          texto="Click"
          botonDeClick={true}
          manejarClick={manejarClick}/>

        <Boton
          texto="Reiniciar"
          botonDeClick={false}
          manejarClick={reiniciarContador}/>
      </div>
    </div>
  );
}

export default ContadorClicks;
