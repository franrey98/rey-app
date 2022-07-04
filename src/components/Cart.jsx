import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {

    const { cart, removeFromCart, cartTotal, removeOneItem, inCart, setInCart } = useContext(CartContext)

    // const setInCartFalse = () => {
    //     setInCart(false)
    // }

    return (
        <div className='pb-10'>
            <h1 className='text-center mt-6 font-semibold text-2xl'>Carrito de Compras</h1>
            {inCart ?
                <div>
                    <div className='flex justify-center gap-24 mx-14'>
                        {cart.map(item => (
                            <li className=' list-none mt-8 flex flex-col text-center' key={item.id}>
                                <p className=' my-2 font-semibold text-xl' >Nombre del Producto: {item.name}</p>
                                <img src={item.image} alt={item.name} />
                                <p className='text-xl font-semibold mt-4'>Cantidad de productos: {item.cantidad}</p>
                                <p className='font-semibold mt-4'>Precio: {item.precio}</p>
                                <button className="p-2 bg-red-700 mt-4 rounded-md font-bold text-xl text-white w-full" onClick={() => removeOneItem(item)}>Eliminar</button>
                                <button className="p-2 bg-red-700 mt-4 rounded-md font-bold text-xl text-white w-full" onClick={() => removeFromCart(item)}>Sacar producto del Carrito</button>
                            </li>
                        ))}
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='text-center mt-10 bg-slate-900 text-white p-3 max-w-fit rounded-xl'>
                            <h2>Compra Total</h2>
                            <p>Total: {cartTotal()}</p>
                        </div>
                        <Link to='/checkout'  /* onClick={setInCartFalse} */ className='mt-4 bg-green-900 p-2 rounded-md text-white text-xl'>Ir al checkout</Link>
                    </div>
                </div>
                : <div>
                    <h2 className='text-center mt-6 font-semibold text-2xl'>No hay productos en el carrito</h2>
                    <div className='flex justify-center mt-3'>
                        <Link to='/categorias'>
                            <button className="p-2 bg-red-700 mt-4 rounded-md font-bold text-xl text-white">Volver a las categorias</button>
                        </Link>
                    </div>
                </div>}
        </div>
    )
}

export default Cart