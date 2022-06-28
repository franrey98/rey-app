import ItemFilter from "./ItemFilter"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { customFetch, getProductsByCategory } from "../utils/CustomFetch"

const ItemCategorySelect = () => {

    const { category } = useParams()

    const [items, setItems] = useState([])

    useEffect(() => {
        customFetch(500, getProductsByCategory(category))
            .then(r => setItems(r))
    }, [category])

    return (
        <div className=" mx-80">
            <h1 className="text-center font-semibold text-2xl mt-6">Categorias de Productos</h1>
            {<ItemFilter
                items={items}
            />}
        </div>
    )
}

export default ItemCategorySelect