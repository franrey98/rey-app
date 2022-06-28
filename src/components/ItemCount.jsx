import { useState } from 'react'
import { Link } from 'react-router-dom'

const ItemCount = ({ stock, initial, onAdd }) => {

    const [counter, setCounter] = useState(initial)

    const aumentarContador = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    const disminuirContador = () => {
        if (counter > initial) {
            setCounter(counter - 1)
        }
    }

    const confirmarCantidad = () => {
        onAdd(counter)
    }


    return (
        <div className='flex flex-col'>
            <div className='flex gap-4 justify-between mt-6 mb-2 items-baseline'>
                <button className='w-8 h-full bg-red-700 mx-4 mt-4 rounded-md font-bold text-xl text-white' onClick={disminuirContador}>-</button>
                <span className='text-2xl font-semibold'>{counter}</span>
                <button className='w-8 h-full bg-red-700 mx-4 mt-4 rounded-md font-bold text-xl text-white' onClick={aumentarContador}>+</button>
            </div>
            <Link to='/cart'>
                <button className="p-2 bg-red-700 mt-4 rounded-md font-bold text-xl text-white w-full" onClick={confirmarCantidad}>Agregar</button>
            </Link>
        </div>
    )
}

export default ItemCount