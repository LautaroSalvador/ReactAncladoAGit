import { Link } from "react-router-dom"
import { ItemCount } from "../ItemCount/ItemCount"
import { useCarritoContext } from "../context/CarritoContext"

export const ItemDetail = ({prod}) =>{

    const {addItem} = useCarritoContext()

    const onAdd = (cantidad) => {
        addItem(prod,cantidad )
    }

return(
    <div className="row g-0">
        <div className="col-md-4">
            <img src={prod.img} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
        <div className="card-body">
        <h5 className="card-title">{prod.nombre} </h5>
        <p className="card-modelo">Modelo : {prod.modelo}</p>
        <p className="card-marca">Marca : {prod.marca}</p>
        <p className="card-precio">Precio : ${new Intl.NumberFormat("de-DE").format(prod.precio)}</p>
        <p className="card-stock">Stock : {prod.stock}</p>
        <ItemCount ValorInicial={1} stock={prod.stock} onAdd={onAdd}/>
        <Link className="nav-link" to={'/cart'}><button className="btn btn-dark finalizar-compra-detail">Finalizar Compra</button></Link>
    </div>
</div>
</div>
    )
}