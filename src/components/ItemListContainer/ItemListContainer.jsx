import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import { getProductos } from "../../utils/firebase"
export const ItemListContainer = () => {
    const {idCategoria} = useParams()
    const [productos,setProductos] = useState([])

    useEffect(()=>{
        if(idCategoria) {
            getProductos().then(products =>{
                const prods = products.filter(prod=> prod.stock > 0).filter(prod => prod.idCategoria === parseInt(idCategoria))
                const items = <ItemList prods={prods} plantilla="Item"/>
                setProductos(items)
            })

        }else{
            getProductos().then(products =>{
                const prods = products.filter(prod=> prod.stock > 0)
                const items = <ItemList prods={prods} plantilla="Item"/>
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
