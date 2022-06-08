import ItemCount from "./ItemCount"


const Item = ({ id, name, image, precio, descripcion, stock }) => {


    return (
        <div className="display-item" key={id}>
            <h1>{name}</h1>
            <img src={image} alt={name} />
            <h2>{descripcion}</h2>
            <p>Precio: ${precio}</p>
            <ItemCount
                stock={stock}
                initial={1}
            />
        </div>
    )
}

export default Item