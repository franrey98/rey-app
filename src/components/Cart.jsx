import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {

    const resultadoContext = useContext(CartContext)
    console.log(resultadoContext.cart)


    const onRemoveFromCart = () => {
        resultadoContext.removeItem(resultadoContext.cart)
    }

    const removeItem = () => {
        resultadoContext.removeOneItem(resultadoContext.cart)
    }

    return (
        <div>
            <div className='display-cart'>
                {resultadoContext.cart.map(item => (
                    <div key={item.id} >
                        <p>Nombre del Producto: {item.name}</p>
                        <img src={item.image} alt={item.name} />
                        <p>Precio por unidad: {item.precio}</p>
                        <p>Cantidad: {resultadoContext.cantidadTotal}</p>
                        <button onClick={removeItem}>Eliminar Item</button>
                    </div>
                ))}
            </div>
            {resultadoContext.cart.length > 0 ? <div className='estilo-cart'>
                <p>Cantidad Total de Productos: {resultadoContext.cantidadTotal}</p>
                <p>Precio Total: {resultadoContext.precioTotal}</p>
                <button onClick={onRemoveFromCart} >Remover Carrito</button>
            </div> : 'Agregue productos al carrito'}
        </div>
    )
}

export default Cart