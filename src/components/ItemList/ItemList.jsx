import { Item } from "../../Item/Item"
export const ItemList = ({prods}) => {
    console.log(prods)
    return(
        <>
        {prods.map(producto => <Item item={producto} key={producto.id}/>)}
        </>
    )
}