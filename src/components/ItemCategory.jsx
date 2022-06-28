import { NavLink } from "react-router-dom"

const ItemCategory = () => {

    return (
        <div>
            <h1 className="text-center mt-4 text-xl font-bold ">Categorias de Productos</h1>
            <ul className="flex justify-evenly mt-16 font-semibold text-xl">
                <li className="bg-slate-900 text-white p-3 rounded-lg">
                    <NavLink className="btn-category" to="Zapatillas">Zapatillas</NavLink>
                </li>
                <li className="bg-slate-900 text-white p-3 rounded-lg">
                    <NavLink className="btn-category" to="Remeras">Remeras</NavLink>
                </li>
                <li className="bg-slate-900 text-white p-3 rounded-lg">
                    <NavLink className="btn-category" to="Futbol">Futbol</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default ItemCategory