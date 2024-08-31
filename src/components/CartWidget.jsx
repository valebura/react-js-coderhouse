import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

export const CartWidget = () => {

  const {cart} = useContext(CartContext)

  return (
    <>     
      <Link to='/cart'>
      <div>🛒
        <span>{cart.length}</span>
      </div>
      </Link>   
        {/* <div className='cart'>
            <div className='bubble-cart'>🔴</div>
            <div className='icon-cart'>🛒</div>
            <div className='number-cart'>5</div>
        </div> */}
    </>
  )
}