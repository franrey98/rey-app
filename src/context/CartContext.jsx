import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [inCart, setInCart] = useState(false);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            let index = cart.findIndex((index) => (index.id === item.id))
            let copyCart = [...cart]
            copyCart[index].cantidad += cantidad
            setCart(copyCart)
        } else {
            const itemToAdd = { ...item, cantidad }
            setCart([...cart, itemToAdd])
        }
        setInCart(true)
    }

    const isInCart = (item) => {
        return cart.some(cartItem => cartItem.id === item.id);
    }

    const removeFromCart = (item) => {
        let index = cart.findIndex((index) => (index.id === item.id))
        let copyCart = [...cart]
        copyCart.splice(index, 1)
        setCart(copyCart)
        if (cart.length <= 0) {
            setInCart(false)

        }

    }

    const removeOneItem = (item) => {
        if (item.cantidad >= 1) {
            let index = cart.findIndex((index) => (index.id === item.id))
            let copyCart = [...cart]
            copyCart[index].cantidad--
            setCart(copyCart)
        }
        if (cart.length === 0 || cart.every(item => item.cantidad === 0)) {
            setInCart(false)
            setCart([])
        }
    }

    const cartTotal = () => {
        return cart.reduce((total, item) => total + (item.precio * item.cantidad), 0)
    }

    const cartTotalItems = () => {
        return cart.reduce((total, item) => total + (item.cantidad), 0)
    }


    const cartLength = () => {
        return cart.reduce((total, item) => total + item.cantidad, 0)
    }


    return (
        <CartContext.Provider value={{ addToCart, cart, setCart, removeFromCart, cartTotal, removeOneItem, cartLength, inCart, setInCart, cartTotalItems }} >
            {children}
        </CartContext.Provider>
    )
}
