import React from 'react'
import ItemCount from './ItemCount'
import { useState } from 'react'

const ItemDetail = ({ item }) => {

    const [cantidadSeleccionada, setCantidadSeleccionada] = useState()
    console.log(cantidadSeleccionada)

    const onAdd = (cantidad) => {
        setCantidadSeleccionada(cantidad)
    }


    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.image} alt={item.name} />
            <p>{item.descripcion}</p>
            <p>Precio: ${item.precio}</p>
            <p>Stock: {item.stock}</p>
            <ItemCount stock={item.stock} onAdd={onAdd} initial={1} />
        </div>
    )
}

export default ItemDetail