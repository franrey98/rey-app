import { useState, useEffect } from 'react'
import customFetch from '../utils/CustomFetch'
import Products from '../utils/Products'
import ItemList from './ItemList'

const ItemListContainer = ({ greeting }) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        customFetch(3000, Products)
            .then(r => setItems(r))
    }, [items])

    return (
        <div>
            <h1 className='h1-greeting'>{greeting}</h1>

            <div className=''>
                <ItemList
                    products={items}
                />
            </div>
        </div>
    )
}

export default ItemListContainer