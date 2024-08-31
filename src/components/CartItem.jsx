import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartItem = ({producto}) => {

    const {deleteProduct} = useContext(CartContext)

    return (
        <div>
            <h3>{producto.nombre}</h3>
            <p>${producto.precio}</p>
            <p>{producto.cantidad}</p>
            <button onClick={()=>deleteProduct(producto.id)}>Eliminar</button>
        </div>
    )
}

export default CartItem