import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {

    const { cart, removeFromCart, cartTotal, removeOneItem, cartLength } = useContext(CartContext)

    return (
        <div>
            <h1>Carrito</h1>
            <div>
                <div className='display-cart'>
                    {cart.map(item => (
                        <li className='estilo-cart' key={item.id}>
                            <p>Nombre del Producto: {item.name}</p>
                            <img src={item.image} alt={item.name} />
                            <p>Cantidad de productos: {item.cantidad}</p>
                            <p>Precio: {item.precio}</p>
                            <button onClick={() => removeOneItem(item)}>Eliminar</button>
                            <button onClick={() => removeFromCart(item)}>Eliminar Total de Productos</button>
                        </li>
                    ))}
                </div>
                <div className='compra-total'>
                    <h2>Compra Total</h2>
                    <p>Total: {cartTotal()}</p>
                </div>
            </div>
        </div>
    )
}

export default Cart