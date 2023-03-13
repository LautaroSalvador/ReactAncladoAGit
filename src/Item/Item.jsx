import { Link } from "react-router-dom"
export const Item = ({item}) => {
    return (
    <div className="card mb-3 cardProducto border-dark">
        <img src={item.img} className="card-img-top" alt={`imagen de ${item.nombre}`} />
        <div className="card-body">
            <h5 className="card-title-principal">{item.nombre} {item.modelo}</h5>
            <p className="card-marca-principal">{item.marca}</p>
            <p className="card-precio-principal">${new Intl.NumberFormat("de-DE").format(item.precio)}</p>
            <Link className="nav-link" to={`/item/${item.id}`} ><button className="btn btn-dark">Ver Mas</button></Link>
        </div>
    </div>

    )
}