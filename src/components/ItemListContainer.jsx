import Products from '../utils/Products'
import ItemList from './ItemList'
import Loader from './Loader'
import { useState, useEffect } from 'react'
import { customFetch } from '../utils/CustomFetch'
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

                {items && items.length > 0 ?
                    <ItemList items={items} />
                    :
                    <div>
                        <Loader />
                    </div>}

            </div>
        </div>
    )
}

export default ItemListContainer