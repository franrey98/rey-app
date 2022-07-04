import { Link } from "react-router-dom"

const RouteError = () => {
    return (
        <div className="text-center mt-12">
            <h1 className="text-red-600 text-4xl font-semibold">Error 404</h1>
            <p className="mb-8 text-red-600 text-4xl font-semibold">Pagina no encontrada</p>
            <Link className=" bg-slate-800 text-white p-3 rounded-md text-lg" to="/">Volver al inicio</Link>
        </div>
    )
}

export default RouteError