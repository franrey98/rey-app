import { useState, useEffect } from 'react'
import customFetch from '../utils/CustomFetch'
import Products from '../utils/Products'
import ItemDetail from './ItemDetail'



const ItemDetailContainer = () => {

    const [item, setItem] = useState({})

    useEffect(() => {
        customFetch(6000, Products.find(p => p.id === 1))
            .then(r => setItem(r))
    }, [item])

    return (
        <>
            {item.id && <ItemDetail item={item} />}
        </>
    )
}

export default ItemDetailContainer