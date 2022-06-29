import carrito from '../img/carrito.png'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'

const CartWidget = () => {

    const { cart } = useContext(CartContext)

    return (
        <div className='flex flex-col my-1'>
            <img src={carrito} className='w-14 h-14' alt="carrito" />
            {cart.length > 0 ? <span className='text-xl text-center'>{cart.length}</span> : ''}
        </div>
    )
}

export default CartWidget