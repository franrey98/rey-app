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

    const removeItem = () => {
        setCart([]);
        setCantidadTotal(0);
        setPrecioTotal(0);
    }

    const removeOneItem = () => {

        if (precioTotal > 0) {
            setCart(cart.filter(i => i.id !== 1));
            setCantidadTotal(cantidadTotal - 1);
        }

        setPrecioTotal(cantidadTotal * cart[0].precio)
    }


    const valorCarrito = {
        cart: cart,
        cantidadTotal: cantidadTotal,
        precioTotal: precioTotal,
        addItem: addItem,
        removeItem: removeItem,
        removeOneItem: removeOneItem
    }

    return (
        <CartContext.Provider value={valorCarrito} >
            {children}
        </CartContext.Provider>
    )
}
