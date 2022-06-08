import { useState } from 'react'

const ItemCount = ({ stock, initial }) => {

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

    return (
        <div className='display-contador'>
            <button className='boton-contador' onClick={disminuirContador}>-</button>
            <span>{counter}</span>
            <button className='boton-contador' onClick={aumentarContador}>+</button>
        </div>
    )
}

export default ItemCount