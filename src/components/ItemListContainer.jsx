import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = ({ greeting }) => {

    return (
        <div>
            <h1 className='h1-greeting'>{greeting}</h1>
            <ItemCount
                initial={1}
                stock={5}
            />
        </div>
    )
}

export default ItemListContainer