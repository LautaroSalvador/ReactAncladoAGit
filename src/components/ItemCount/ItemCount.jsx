import { useState } from "react"
export const ItemCount = ({ValorInicial, stock, onAdd}) => {
    const [contador, setContador] = useState(ValorInicial) 

    const sumar = () => contador < stock && setContador(contador+1) 
    const restar= ()=> contador > ValorInicial && setContador(contador-1)

    return (
        <div>
            <button className="btn btn-dark" onClick={()=>restar()} id="boton1">-</button>
            {contador}
            <button className="btn btn-dark" onClick={()=>sumar()}id="boton2">+</button>
            <button className="btn btn-light" onClick={() => onAdd(contador)}>Agregar al carrito</button>
        </div>
    )
}
