import Item from "./Item"

const ItemFilter = ({ items }) => {

    return (
        <div className="display-item">
            {items.map(p => (
                <Item
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    image={p.image}
                    precio={p.precio}
                    category={p.category}
                    descripcion={p.descripcion}
                    stock={p.stock}
                />
            ))}
        </div>
    )
}

export default ItemFilter