import { useCarritoContext } from "../context/CarritoContext"

export const ItemCart = ({item}) => {
    const {removeItem} = useCarritoContext()
    return(
        <div className="card mb-3 cardCart">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={item.img} alt={`Imagen de ${item.nombre}`} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{item.nombre} {item.marca}</h4>
                        <p className="card-text">Cantidad: {item.cant}</p>
                        <p className="card-text">Precio Unitario: ${new Intl.NumberFormat("de-DE").format(item.precio)}</p>
                        <p className="card-text">Precio Subtotal: ${new Intl.NumberFormat("de-DE").format(item.cant * item.precio)}</p>
                        <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Eliminar Producto</button>
                    </div>
                </div>
            </div>
        </div>
    )
}