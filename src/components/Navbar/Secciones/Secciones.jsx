import { Link } from "react-router-dom"
export const Secciones = () => {
    return (
    <>
        <h2>Tienda Varitas Magicas</h2>
        <li className="nav-item">
            <Link className="nav-link" to={"/"}><button className="btn btn-danger">Home</button></Link>
        </li>
    </>
    )
}