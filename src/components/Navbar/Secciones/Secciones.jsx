import { Link } from "react-router-dom"
import React from "react"
export const Secciones = React.memo(() => {
    return (
    <>
        <h2>Zapatillas Magicas</h2>
        <li className="nav-item">
            <Link className="nav-link" to={"/"}><button className="btn btn-danger">Menu Principal</button></Link>
        </li>
    </>
    )
}
)