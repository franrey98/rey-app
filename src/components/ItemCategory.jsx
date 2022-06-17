import { Link, useParams } from "react-router-dom"

const ItemCategory = () => {

    const { category } = useParams()

    return (
        <div>
            <h1>Categorias de Productos</h1>
            <ul className="style-category">
                <li>
                    <Link className="btn-category" to={`/categorias/${category}`}>Zapatillas</Link>
                </li>
                <li>
                    <Link className="btn-category" to={`/categorias/${category}`}>Remeras</Link>
                </li>
                <li>
                    <Link className="btn-category" to={`/categorias/${category}`}>Futbol</Link>
                </li>
            </ul>
        </div>
    )
}

export default ItemCategory