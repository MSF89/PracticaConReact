import { useState } from "react";
import {evaluate} from "mathjs";
import BotonesCalc from "./componentesExtra/BotonesCalc";
import PantallaCalc from "./componentesExtra/PantallaCalc"
import BotonClear from "./componentesExtra/BotonClearCalc";
import "../Styles/Calculadora.css"
import Logo from "./componentesExtra/Logo";

function Calculadora(){

    const [input, setInput] = useState('');

    const agregarInput = val => {
        setInput(input + val);
    };

    const calcularResultado = () => {
        if (input){
            setInput(evaluate(input))
        } else {
            alert("Por favor ingrese valores para realizar los calculos")
        }
    }
    return (
        <div className="calculadora">
            <Logo/>
            <div className="contenedorCalculadora">
                <PantallaCalc input={input}/>
                <div className="fila">
                    <BotonesCalc manejarClic={agregarInput}>1</BotonesCalc>
                    <BotonesCalc manejarClic={agregarInput}>2</BotonesCalc>
                    <BotonesCalc manejarClic={agregarInput}>3</BotonesCalc>
                    <BotonesCalc manejarClic={agregarInput}>+</BotonesCalc>
                </div>
                <div className="fila">
                    <BotonesCalc manejarClic={agregarInput}>4</BotonesCalc>
                    <BotonesCalc manejarClic={agregarInput}>5</BotonesCalc>
                    <BotonesCalc manejarClic={agregarInput}>6</BotonesCalc>
                    <BotonesCalc manejarClic={agregarInput}>-</BotonesCalc>
                </div>
                <div className="fila">
                    <BotonesCalc manejarClic={agregarInput}>7</BotonesCalc>
                    <BotonesCalc manejarClic={agregarInput}>8</BotonesCalc>
                    <BotonesCalc manejarClic={agregarInput}>9</BotonesCalc>
                    <BotonesCalc manejarClic={agregarInput}>*</BotonesCalc>
                </div>
                <div className="fila">
                    <BotonesCalc manejarClic={calcularResultado}>=</BotonesCalc>
                    <BotonesCalc manejarClic={agregarInput}>0</BotonesCalc>
                    <BotonesCalc manejarClic={agregarInput}>.</BotonesCalc>
                    <BotonesCalc manejarClic={agregarInput}>/</BotonesCalc>
                </div>
                <div className="fila">
                    <BotonClear manejarClear={() => setInput('')}>Borrar</BotonClear>
                </div>
            </div>
        </div>
    )
}

export default Calculadora;