import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {

    const resultadoContext = useContext(CartContext)

    return (
        <div>
            <h1>Carrito</h1>
            <div>
                {resultadoContext.cantidadTotal}
                {resultadoContext.precioTotal}
            </div>
        </div>
    )
}

export default Cart