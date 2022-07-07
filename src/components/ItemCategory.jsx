import { NavLink, Link } from "react-router-dom"

const ItemCategory = () => {

    return (
        <div>
            <h1 className="text-center mt-6 text-3xl font-bold ">Categorias de Productos</h1>
            <div className="md:mx-64 ">
                <p className="text-center mt-8 font-normal mx-12 text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias magni fugiat nostrum sint dolorum accusantium accusamus cum, ea expedita amet porro libero commodi laborum soluta repellendus? Ipsa distinctio fugit quidem.</p>
                <ul className="flex flex-col md:flex-row md:mx-0 text-center mx-24 justify-evenly mt-12 font-semibold text-xl">
                    <NavLink to="Zapatillas" className="bg-slate-900 hover:bg-slate-700 transition-all text-white p-3 rounded-lg my-6">
                        <button>Zapatillas</button>
                    </NavLink>
                    <NavLink to="Remeras" className="bg-slate-900 hover:bg-slate-700 transition-all text-white p-3 rounded-lg my-6">
                        <button>Remeras</button>
                    </NavLink>
                    <NavLink to="Futbol" className="bg-slate-900 hover:bg-slate-700 transition-all text-white p-3 rounded-lg my-6">
                        <button>Futbol</button>
                    </NavLink>
                </ul>
            </div>
            <div className="w-full flex justify-center md:pl-6 pl-0">
                <Link className="flex justify-center md:mt-20 mt-8 mb-8 w-64 bg-red-900/90 text-white p-2 rounded-md transition-all hover:bg-red-700" to='/'>
                    Volver a Inicio
                </Link>
            </div>
        </div>
    )
}

export default ItemCategory