import { useRef} from "react"
import { useNavigate } from "react-router-dom"
import {  toast } from 'react-toastify';
import { useCarritoContext } from "../context/CarritoContext";
import { Link } from "react-router-dom";
import { createOrdenCompra, updateProducto, getProducto } from "../../utils/firebase";


export const Checkout = () => {
    const {carrito, emptyCart, totalPrice} =    useCarritoContext()
    let navigate= useNavigate()
    const datosForm = useRef()
    const consultarFormulario = (e) => {
        e.preventDefault()
        const data = new FormData(datosForm.current)
const cliente = Object.fromEntries(data)

const email = document.querySelector('#email')
const confirmarEmail = document.querySelector('#confirmar')

if (email.value !== confirmarEmail.value) {
toast.error('Los campos de email y confirmar email deben ser iguales')
}
else {
    const aux = [...carrito]
    aux.forEach(prodCarrito => {
        getProducto(prodCarrito.id).then(prodBDD => {
            prodBDD.stock -= prodCarrito.cant
            updateProducto(prodBDD.id, prodBDD)
        })
    })
    

        createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra =>{
    toast.success(`Se ha realizado su compra, ID de compra: ${ordenCompra.id} por un total de $ ${new Intl.NumberFormat("de-DE").format(totalPrice())}`
    );  
    e.target.reset()
    emptyCart()
    navigate("/")
})
}    
}

    return (

        

        <>
            {carrito.length === 0
                ?
                <> 
                    <h2 className="titulo-carrito">No hay productos en el carrito, por favor vuelva y seleccione.</h2>
                    <Link className="nav-link " to={"/"}><button className="btn btn-dark boton-carrito">Volver al menú</button></Link>                
                </>

                :
                <div className="container contForm">
                    <form onSubmit={consultarFormulario} ref={datosForm}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label"  >Nombre y apellido </label>
                            <input required type="text" id="nombre" className="form-control" name="nombre"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label" >Email </label>
                            <input required type="email" id="email" className="form-control" name="email"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label" >Confirmar Email </label>
                            <input required type="email" id="confirmar" className="form-control" name="confirmarEmail"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="documento" className="form-label" >Documento </label>
                            <input required type="number" id="dni" className="form-control" name="documento"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Numero telefonico" className="form-label" >Telefono </label>
                            <input required type="number"  id="telefono" className="form-control" name="Numero telefonico"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="direccion" className="form-label">Direccion</label>
                            <input required type="text" id="direccion" className="form-control" name="direccion"/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-form" id="form">Finalizar compra</button>
                    </form>
                </div>
            }  
            
        
        </>
    )   
}





