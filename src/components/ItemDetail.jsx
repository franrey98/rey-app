import React from 'react'
import { Link } from 'react-router-dom'

const ItemDetail = ({ item }) => {
    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.image} alt={item.name} />
            <p>{item.descripcion}</p>
            <p>Precio: ${item.precio}</p>
            <p>Stock: {item.stock}</p>
            <Link to={`/productos/${item.id}`}>Ver más</Link>
        </div>
    )
}

export default ItemDetail