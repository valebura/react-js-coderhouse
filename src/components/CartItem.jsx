import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartItem = ({product}) => {

    const {deleteProduct} = useContext(CartContext)

    return (
        <div>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            {/* <p>{product.cantidad}</p> */}
            <button onClick={()=>deleteProduct(product.id)}>Eliminar</button>
        </div>
    )
}

export default CartItem