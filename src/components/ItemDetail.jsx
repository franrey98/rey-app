import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ item }) => {
    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.image} alt={item.name} />
            <p>{item.descripcion}</p>
            <p>Precio: ${item.precio}</p>
            <p>Stock: {item.stock}</p>
            <ItemCount stock={5} />
        </div>
    )
}

export default ItemDetail