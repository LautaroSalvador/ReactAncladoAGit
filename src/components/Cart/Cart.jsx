import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import { useCarritoContext } from "../context/CarritoContext"
export const Cart = () => {
    const {carrito, emptyCart, totalPrice} = useCarritoContext()
return (
    <>
        {
            carrito.length === 0
            ?
                <>
                    <h2 className="titulo-carrito">No hay productos en el carrito, por favor vuelva y seleccione.</h2>
                    <Link className="nav-link " to={"/"}><button className="btn btn-dark boton-carrito">Volver al menú</button></Link>
                </>
            :
                <div className="container carrito-productos-container">
                    <ItemList prods={carrito} plantilla="ItemCart"/>
                    <div className="divButtons">
                        <p className="carrito-precio-total">¿Cuánto me va a doler?: <p className="precio-total">${new Intl.NumberFormat("de-DE").format(totalPrice())}</p></p>
                        <button className="btn btn-danger carrito-boton" onClick={() => emptyCart()}>Vaciar Carrito</button>
                        <Link className="nav-link " to={"/"}><button className=" btn btn-info carrito-boton">Continuar comprando</button></Link>
                        <Link className="nav-link " to={"/checkout"}><button className=" btn btn-info carrito-boton">Finalizar </button></Link>
                    </div>
                </div>

        }
    </>
    )

}