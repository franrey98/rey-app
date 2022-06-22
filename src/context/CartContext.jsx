import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [cantidadTotal, setCantidadTotal] = useState(0);
    const [precioTotal, setPrecioTotal] = useState(0);

    const addItem = (item, cantidad) => {
        setCart([...cart, item]);
        setCantidadTotal(cantidadTotal + cantidad);
        setPrecioTotal(precioTotal + item.precio * cantidad);
    }

    const removeItem = (item) => {
        setCart(cart.filter(i => i.id !== item.id));
        setCantidadTotal(cantidadTotal - item.cantidad);
        setPrecioTotal(precioTotal - item.precio * item.cantidad);
    }


    const valorCarrito = {
        cart: cart,
        cantidadTotal: cantidadTotal,
        precioTotal: precioTotal,
        addItem: addItem,
        removeItem: removeItem

    }

    return (
        <CartContext.Provider value={valorCarrito} >
            {children}
        </CartContext.Provider>
    )
}
