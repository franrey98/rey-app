import ItemList from './ItemList'
import Loader from './Loader'
import { useState, useEffect } from 'react'
import { db } from '../config/Firebase'
import { getDocs, collection } from 'firebase/firestore'
// getDoc, getDocs, doc, query, where, collection 

const ItemListContainer = ({ greeting }) => {

    const [items, setItems] = useState([])

    useEffect(() => {

        // Busco los productos en la base de datos
        const collectionProductos = collection(db, 'productos')
        // Hago la consulta
        const consulta = getDocs(collectionProductos)

        // const queryConsulta = query(collectionProductos, where('category', '==', category))

        // Ejecuto la consulta
        consulta.then((resultado) => {
            // Extraigo el id de cada producto
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