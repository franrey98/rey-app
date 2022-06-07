import { useState } from 'react'

const ItemCount = ({ initial, stock }) => {

    const [counter, setCounter] = useState(initial)

    const onSuma = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    const onResta = () => {
        if (counter <= stock) {
            setCounter(counter - 1)
        }
    }

    const onAdd = () => {
        console.log(`Añadir al carrito ${counter} cantidades`)
    }


    return (
        <div>
            <h1 className='h1-centrado'>Item Count</h1>
            <div className='display-contador'>
                <button className='boton-operacion' onClick={onResta}>-</button>
                <p className='parrafo-contador'>{counter}</p>
                <button className='boton-operacion' onClick={onSuma}>+</button>
            </div>
            <input onClick={onAdd} className='boton-contador' type="submit" value="Agregar al Carrito" />
        </div>
    )
}

export default ItemCount