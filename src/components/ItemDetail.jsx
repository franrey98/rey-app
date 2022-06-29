import React from 'react'
import ItemCount from './ItemCount'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({ item }) => {

    const { addToCart } = useContext(CartContext)

    const onAdd = (cantidad) => {
        addToCart(item, cantidad)
    }

    return (
        <div className=''>
            <div className='w-full flex flex-col items-center'>
                <h1 className="text-xl font-bold my-4">{item.name}</h1>
                <img className=" h-72 w-60 rounded-sm" src={item.image} alt={item.name} />
                <p className="text-xl font-semibold my-2">{item.descripcion}</p>
                <p className="text-xl font-semibold my-2">Precio: ${item.precio}</p>
                <p className="font-normal text-xl">Stock: {item.stock}</p>
                <ItemCount stock={item.stock} onAdd={onAdd} initial={1} />
            </div>
        </div>
    )
}

export default ItemDetail