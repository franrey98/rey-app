import React from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({ item }) => {


    const [cantidadSeleccionada, setCantidadSeleccionada] = useState()

    const onAdd = (cantidad) => {
        setCantidadSeleccionada(cantidad)
    }

    const resultadoContext = useContext(CartContext)

    const onAddToCart = () => {
        resultadoContext.addItem(item, cantidadSeleccionada)
    }

    return (
        <div className='display-detail'>
            <div>
                {
                    resultadoContext.cantidadTotal > 1 ? <Link to="/categorias">Volver a categorias </Link > :
                        <div>
                            <h1>{item.name}</h1>
                            <img src={item.image} alt={item.name} />
                            <p>{item.descripcion}</p>
                            <p>Precio: ${item.precio}</p>
                            <p>Stock: {item.stock}</p>
                            <ItemCount stock={item.stock} onAdd={onAdd} initial={1} />
                            <button onClick={onAddToCart}>Agregar al carrito</button>
                        </div>
                }
            </div>

        </div>
    )
}

export default ItemDetail