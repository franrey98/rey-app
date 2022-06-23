import React from 'react'
import ItemCount from './ItemCount'
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
        console.log(cantidadSeleccionada)
    }

    const onRemoveFromCart = () => {
        resultadoContext.removeItem(item)
    }

    return (
        <div className='display-detail'>
            <div>
                {
                    resultadoContext.cart.length > 0 ? 'Su compra ha sido agregada al carrito' :
                        <div>

                            <h1>{item.name}</h1>
                            <img src={item.image} alt={item.name} />
                            <p>{item.descripcion}</p>
                            <p>Precio: ${item.precio}</p>
                            <p>Stock: {item.stock}</p>
                            <ItemCount stock={item.stock} onAdd={onAdd} initial={1} />
                            <button onClick={onAddToCart}>Agregar al carrito</button>
                            <button onClick={onRemoveFromCart}>Eliminar del carrito</button>
                        </div>
                }
            </div>

        </div>
    )
}

export default ItemDetail