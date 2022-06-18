import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { getProductsById } from '../utils/CustomFetch'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {

    const [item, setItem] = useState({})

    const { id } = useParams()

    useEffect(() => {
        getProductsById(parseInt(id))
            .then(response => { setItem(response) })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [item])

    return (
        <>
            {<ItemDetail {...item} item={item} />}
        </>
    )
}

export default ItemDetailContainer