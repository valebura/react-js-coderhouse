import { createContext, useState } from "react";


export const CartContext = createContext()


export const CartContextProvider = ( {children} ) => {
    const [cart, setCart] = useState([])

    const addToCart = (prod) =>{
        setCart([...cart, prod])
    }

    const clearCart = () => {
        setCart([])
    }

    const deleteProduct = (id) =>{
        const newCart = cart.filter(e => e.id !== id)
        setCart(newCart)
    }

    return(
        <CartContext.Provider value={ {cart, setCart, addToCart, clearCart, deleteProduct}} >
            {children}
        </CartContext.Provider>
    )
}