import { useRef} from "react"
export const Checkout = () => {
    const datosForm = useRef()
    const consultarFormulario = (e) => {
        e.preventDefault()
        const data = new FormData(datosForm.current)
        const cliente = Object.fromEntries(data)
        console.log(cliente)
    }

    return (
        <div className="container contForm">
            <form onSubmit={consultarFormulario} ref={datosForm}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y apellido </label>
                    <input type="text" className="form-control" name="nombre"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email </label>
                    <input type="email" className="form-control" name="email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="documento" className="form-label">Documento </label>
                    <input type="number" className="form-control" name="documento"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Numero telefonico" className="form-label">Telefono </label>
                    <input type="number" className="form-control" name="Numero telefonico"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Direccion</label>
                    <input type="text" className="form-control" name="direccion"/>
                </div>
                <button type="submit" className="btn btn-primary btn-form">Finalizar compra</button>
            </form>
        </div>
    )
}