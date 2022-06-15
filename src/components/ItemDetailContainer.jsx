import { useState, useEffect } from 'react'
import { getProductsById } from '../utils/CustomFetch'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'



const ItemDetailContainer = () => {

    const [item, setItem] = useState({})

    const { id } = useParams()

    useEffect(() => {
        getProductsById(parseInt(id))
            .then(response => { setItem(response) })
    }, [item])

    return (
        <>
            {<ItemDetail {...item} item={item} />}
        </>
    )
}

export default ItemDetailContainer