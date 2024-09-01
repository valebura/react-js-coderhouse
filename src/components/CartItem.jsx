import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const CartItem = ({product}) => {

    const {deleteProduct} = useContext(CartContext)

    return (
        <div>
            <div className='text-center rounded shadow-md p-4'>
                <h3 className='text-2xl font-bold text-gray-900 mb-2'>{product.name}</h3>
                <p className='text-xl font-bold text-sky-900 mb-4'>${product.price}</p>
                <img className='w-auto mb-4' src={product.image} alt="" />
                <div className='flex flex-row align-items-center justify-between'>
                    <p className='text-xl text-gray-600'>Cantidad: {product.quantity}</p>
                    <button className='rounded-full bg-red-400 hover:bg-red-600' onClick={()=>deleteProduct(product.product_id)}>❌ Eliminar</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem