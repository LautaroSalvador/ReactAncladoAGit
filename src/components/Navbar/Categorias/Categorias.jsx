import { Link } from "react-router-dom"
import React from "react"
export const Categorias = React.memo(() => {
    return (
    <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <button className="btn btn-dark">Categorias</button>
            </a>
            <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={"/category/1"}>Zapatillas de nenes</Link></li>
            <li><Link className="dropdown-item" to={"/category/2"}>Zapatillas de hombre</Link></li>
            <li><Link className="dropdown-item" to={"/category/3"}>Zapatillas de mujer</Link></li>
            </ul>
    </li>
    )
}
)