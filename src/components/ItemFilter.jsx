import Item from "./Item"

const ItemFilter = ({ items }) => {

    return (
        <div className="grid grid-cols-2 mx-8 gap-16 mt-8 md:mx-44 md:gap-48">
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