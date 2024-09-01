import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartContextProvider = ( {children} ) => {
    const [cart, setCart] = useState([])

    const addToCart = (prod) => {
        setCart((prevCart) => {
          const productoExistente = prevCart.find((item) => item.product_id === prod.product_id);    
          if (productoExistente) {
            return prevCart.map((item) =>
              item.product_id === prod.product_id
                ? { ...item, quantity: item.quantity + prod.quantity }
                : item
            );
          } else {
            return [...prevCart, prod];
          }
        });
    };

    const clearCart = () => {
        setCart([])
    }

    const deleteProduct = (product_id) =>{
        const newCart = cart.filter(e => e.product_id !== product_id)
        setCart(newCart)
    }

    return(
        <CartContext.Provider value={ {cart, setCart, addToCart, clearCart, deleteProduct}} >
            {children}
        </CartContext.Provider>
    )
}