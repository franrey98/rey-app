import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [cantidadTotal, setCantidadTotal] = useState(0);
    const [precioTotal, setPrecioTotal] = useState(0);

    const addItem = (item) => {
        setCart([...cart, item]);
        setCantidadTotal(cantidadTotal + item.cantidad);
        setPrecioTotal(precioTotal + item.precio);
    }

    const valorCarrito = {
        cart: cart,
        cantidadTotal: cantidadTotal,
        precioTotal: precioTotal,
        addItem: addItem
    }

    return (
        <CartContext.Provider value={valorCarrito} >
            {children}
        </CartContext.Provider>
    )
}
