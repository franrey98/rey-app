import carrito from '../img/carrito.png'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {

    const resultadoContext = useContext(CartContext)
    console.log(resultadoContext.cart)


    const onRemoveFromCart = () => {
        resultadoContext.removeItem(resultadoContext.cart)
    }

    return (
        <div>
            <img src={carrito} className='img-carrito' alt="carrito" />
            {resultadoContext.cart.length > 0 ? <div>
                <p>Nombre de Categoria: {resultadoContext.nombreCategoria}</p>
                <p>Cantidad Total: {resultadoContext.cantidadTotal}</p>
                <p>Precio Total: {resultadoContext.precioTotal}</p>
                <button onClick={onRemoveFromCart} >Remover Carrito</button>
            </div> : ''}

        </div>
    )
}

export default CartWidget