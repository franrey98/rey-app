import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [nombreCategoria, setNombreCategoria] = useState("");
    const [cantidadTotal, setCantidadTotal] = useState(0);
    const [precioTotal, setPrecioTotal] = useState(0);

    const addItem = (item, cantidad) => {
        setCart([...cart, item]);
        setNombreCategoria(item.category);
        setCantidadTotal(cantidadTotal + cantidad);
        setPrecioTotal(precioTotal + item.precio * cantidad);
    }

    const removeItem = () => {
        setCart([]);
        setCantidadTotal(0);
        setPrecioTotal(0);
    }


    const valorCarrito = {
        cart: cart,
        cantidadTotal: cantidadTotal,
        precioTotal: precioTotal,
        nombreCategoria: nombreCategoria,
        addItem: addItem,
        removeItem: removeItem

    }

    return (
        <CartContext.Provider value={valorCarrito} >
            {children}
        </CartContext.Provider>
    )
}
