import carrito from '../img/carrito.png'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartWidget = () => {

    const resultadoContext = useContext(CartContext)
    console.log(resultadoContext.cart)

    return (
        <div>
            <img src={carrito} className='img-carrito' alt="carrito" />
            {resultadoContext.cart.length > 0 ? <div>
                <p>{resultadoContext.cantidadTotal}</p>
                <p>{resultadoContext.precioTotal}</p>
            </div> : <p>No hay productos en el carrito</p>}

        </div>
    )
}

export default CartWidget