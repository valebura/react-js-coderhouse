import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart, clearCart} = useContext(CartContext)

    return (
        <div className='container m-auto text-center'>
            <div className='grid gap-5 grid-cols-3'>
                {cart.map(e=> {
                    return (
                    <CartItem key={e.id} product={e}/>
                    )
                })}
            </div>
            <div className='flex flex-row align-items-center justify-content-center mt-5 text-center'>
                <button className='rounded-full bg-orange-400 hover:bg-orange-600 w-80 mr-5' onClick={clearCart}>🗑 Vaciar Carrito</button>
                <Link to='/checkout'><button className='rounded-full bg-green-500 hover:bg-green-700 w-80 ml-5'>💲 Comprar</button></Link>
            </div>
        </div>
    )
}

export default Cart