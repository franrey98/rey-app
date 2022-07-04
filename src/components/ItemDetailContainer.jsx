import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collectionProd } from '../config/Firebase'
import { getDoc, doc } from 'firebase/firestore'


const ItemDetailContainer = () => {

    const [item, setItem] = useState({})

    const { id } = useParams()

    useEffect(() => {

        const ref = doc(collectionProd, id)

        getDoc(ref).then(data => {
            setItem({
                id: data.id,
                ...data.data()
            })
        })
    }, [id])

    return (
        <ItemDetail {...item} item={item} />
    )
}

export default ItemDetailContainer