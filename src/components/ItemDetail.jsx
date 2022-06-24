import React from 'react'
import ItemCount from './ItemCount'
import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({ item }) => {


    const [cantidadSeleccionada, setCantidadSeleccionada] = useState()

    const resultadoContext = useContext(CartContext)

    const onAdd = (cantidad) => {
        setCantidadSeleccionada(cantidad)
        resultadoContext.addItem(item, cantidad)
    }

    return (
        <div className='display-detail'>
            <div>
                <div>
                    <h1>{item.name}</h1>
                    <img src={item.image} alt={item.name} />
                    <p>{item.descripcion}</p>
                    <p>Precio: ${item.precio}</p>
                    <p>Stock: {item.stock}</p>
                    <ItemCount stock={item.stock} onAdd={onAdd} initial={1} />
                </div>

            </div>

        </div>
    )
}

export default ItemDetail