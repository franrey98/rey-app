import { NavLink } from "react-router-dom"

const ItemCategory = () => {

    return (
        <div>
            <h1>Categorias de Productos</h1>
            <ul className="style-category">
                <li>
                    <NavLink className="btn-category" to="zapatillas">Zapatillas</NavLink>
                </li>
                <li>
                    <NavLink className="btn-category" to="remeras">Remeras</NavLink>
                </li>
                <li>
                    <NavLink className="btn-category" to="futbol">Futbol</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default ItemCategory