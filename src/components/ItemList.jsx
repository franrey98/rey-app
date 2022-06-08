import React from 'react'
import Item from './Item'

const ItemList = ({ products }) => {
    return (
        <div className='display-productos'>
            {products.map(p => (
                <Item
                    key={p.id}
                    name={p.name}
                    image={p.image}
                    precio={p.precio}
                    descripcion={p.descripcion}
                    stock={p.stock}
                />
            ))}
        </div>
    )
}

export default ItemList