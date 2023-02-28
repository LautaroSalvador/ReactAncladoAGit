import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { consultarBBD } from "../../utils/funciones"
import { ItemList } from "../ItemList/ItemList"
export const ItemListContainer = () => {
    const {idCategoria} = useParams()
    const [productos,setProductos] = useState([])
    console.log(idCategoria)

    useEffect(()=>{
        if(idCategoria) {
            consultarBBD("../json/productos.json").then(products =>{
                const prods = products.filter(prod => prod.idCategoria === parseInt(idCategoria))
                const items = ItemList({prods})
                setProductos(items)
            })

        }else{
            consultarBBD("./json/productos.json").then(prods =>{
                const items = ItemList({prods})
                setProductos(items)
            })

        }

        
    }, [idCategoria])

    return (
        
        <div className="row cardProductos">
            {productos}
        </div>
    )
}
