import { Link } from "react-router-dom"

const Item = ({ id, name, image, precio, descripcion, category }) => {

    return (
        <div className="flex flex-col text-center" key={id}>
            <h1 className="text-xl font-bold my-4">{name}</h1>
            <img className=" h-72 w-full rounded-sm" src={image} alt={name} />
            <h2 className="text-xl font-semibold my-2">{descripcion}</h2>
            <h3 className="text-xl font-semibold my-2">{category}</h3>
            <p className="font-normal text-xl">Precio: ${precio}</p>
            <Link className="p-2 bg-red-700 mt-4 rounded-md font-bold text-xl text-white" to={`/productos/${id}`}>Ver más</Link>
        </div>
    )
}

export default Item