import Products from '../utils/Products'
import ItemList from './ItemList'
import Loader from './Loader'
import { useState, useEffect } from 'react'
import { customFetch } from '../utils/CustomFetch'
import { db } from '../config/Firebase'

const ItemListContainer = ({ greeting }) => {

    console.log(db)

    const [items, setItems] = useState([])

    useEffect(() => {
        customFetch(3000, Products)
            .then(r => setItems(r))
    }, [items])

    return (
        <div className=' mx-52 pb-8'>

            <div className=''>
                {items && items.length > 0 ?
                    <div>
                        <h1 className='text-center font-bold text-2xl mt-8'>{greeting}</h1>
                        <ItemList items={items} />
                    </div>
                    :
                    <div>
                        <Loader />
                    </div>}

            </div>
        </div>
    )
}

export default ItemListContainer