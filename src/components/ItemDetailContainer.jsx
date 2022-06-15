import { useState, useEffect } from 'react'
import customFetch from '../utils/CustomFetch'
import Products from '../utils/Products'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'



const ItemDetailContainer = () => {

    const [item, setItem] = useState({})

    const { id } = useParams()
    console.log(id)

    useEffect(() => {
        customFetch(3000, Products)
            .then(r => setItem(r))
    }, [item])

    return (
        <>
            {item.id && <ItemDetail item={item} />}
        </>
    )
}

export default ItemDetailContainer