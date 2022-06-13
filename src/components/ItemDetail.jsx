import React from 'react'

const ItemDetail = ({ item }) => {
    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.image} alt={item.name} />
            <p>{item.descripcion}</p>
            <p>Precio: ${item.precio}</p>
            <p>Stock: {item.stock}</p>
        </div>
    )
}

export default ItemDetail