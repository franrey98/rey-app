import ItemList from './ItemList'
import Loader from './Loader'
import { useState, useEffect } from 'react'
import { db } from '../config/Firebase'
import { getDocs, collection } from 'firebase/firestore'

const ItemListContainer = ({ greeting }) => {

    const [items, setItems] = useState([])

    useEffect(() => {

        const collectionProductos = collection(db, 'productos')

        const consulta = getDocs(collectionProductos)

        consulta.then((resultado) => {

            const productosId = resultado.docs.map(productos => {
                const aux = productos.data()
                aux.id = productos.id
                return aux
            })
            setItems(productosId)
        })
            .catch((error) => {
                console.log(error)
            })
    }, [items])


    return (
        <div className='md:mx-52 mx-20 pb-8'>
            <div className=''>
                {items && items.length > 0 ?
                    <div>
                        <h1 className='text-center font-bold text-2xl mt-8'>{greeting}</h1>
                        <ItemList items={items} />
                    </div>
                    :
                    <div>
                        <Loader />
                    </div>}

            </div>
        </div>
    )
}

export default ItemListContainer