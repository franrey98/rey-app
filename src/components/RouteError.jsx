import { Link } from "react-router-dom"

const RouteError = () => {
    return (
        <div className="page-error">
            <h1>Error 404</h1>
            <p>Pagina no encontrada</p>
            <Link className="btn-back" to="/">Volver al inicio</Link>
        </div>
    )
}

export default RouteError