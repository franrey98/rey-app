import React from 'react'
import Item from './Item'

const ItemList = ({ items }) => {
    return (
        <div className='grid grid-cols-3 mt-8 gap-10'>
            {items.map(p => (
                <Item
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    image={p.image}
                    precio={p.precio}
                    category={p.category}
                    descripcion={p.descripcion}
                    stock={p.stock}
                />
            ))}
        </div>
    )
}

export default ItemList