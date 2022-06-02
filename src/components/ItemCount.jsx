import { useState } from 'react'

const ItemCount = () => {

    const [initial, setinitial] = useState(1)

    const onSuma = () => {
        if (initial <= 4) {
            setinitial(initial + 1)
        }
    }

    const onResta = () => {
        if (initial > 1) {
            setinitial(initial - 1)
        }
    }

    const onAdd = () => {
        console.log(`Añadir al carrito ${initial} cantidades`)
    }


    return (
        <div>
            <h1 className='h1-centrado'>Item Count</h1>
            <div className='display-contador'>
                <button className='boton-operacion' onClick={onResta}>-</button>
                <p className='parrafo-contador'>{initial}</p>
                <button className='boton-operacion' onClick={onSuma}>+</button>
            </div>
            <input onClick={onAdd} className='boton-contador' type="submit" value="Agregar al Carrito" />
        </div>
    )
}

export default ItemCount