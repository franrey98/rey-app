import { useState } from 'react'

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
        <div className='display-contador'>
            <button className='boton-contador' onClick={disminuirContador}>-</button>
            <span className='span-contador'>{counter}</span>
            <button className='boton-contador' onClick={aumentarContador}>+</button>
            <button className='boton-contador' onClick={confirmarCantidad}>Agregar</button>
        </div>
    )
}

export default ItemCount