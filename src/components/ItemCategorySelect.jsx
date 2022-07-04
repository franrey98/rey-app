import ItemFilter from "./ItemFilter"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { collectionProd } from '../config/Firebase'
import { getDocs, query, where } from 'firebase/firestore'


const ItemCategorySelect = () => {

    const [items, setItems] = useState([])

    const { category } = useParams()

    useEffect(() => {

        const ref = category
            ? query(collectionProd, where('category', '==', category))
            : collectionProd

        getDocs(ref).then((resultado) => {
            const productosId = resultado.docs.map(productos => {
                return {
                    id: productos.id,
                    ...productos.data()
                }
            })
            setItems(productosId)
        });
    }, [category])



    return (
        <div className="md:mx-24 pb-12">
            <h1 className="text-center font-semibold text-2xl mt-6">Categorias de Productos</h1>
            {<ItemFilter
                items={items}
            />}
        </div>
    )
}

export default ItemCategorySelect