import { Link } from "react-router-dom"

const Item = ({ id, name, image, precio, descripcion }) => {


    return (
        <div className="display-item" key={id}>
            <h1>{name}</h1>
            <img src={image} alt={name} />
            <h2>{descripcion}</h2>
            <p>Precio: ${precio}</p>
            <Link to={`/productos/${id}`}>Ver más</Link>
        </div>
    )
}

export default Item