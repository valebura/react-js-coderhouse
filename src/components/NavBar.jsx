import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from './CartWidget'
import { CartContext } from '../context/CartContext'
import { ThemeContext } from '../context/ThemeContext'

export const NavBar = () => {
  
  const {mensajito} = useContext(CartContext)
  const {darkTheme ,setDarkTheme} = useContext(ThemeContext)

  return (
    <nav>
        <Link to="/">
          <h2 className='text-3xl font-bold'>HardwareZone</h2>
        </Link>
        <div className='flex space items-center justify-between text-white font-bold'>
          <Link to='/category/procesadores' className='mx-3 hover:text-red-500'>Procesadores</Link>
          <Link to='/category/placas' className='mx-3 hover:text-red-500'>Placas de Video</Link>
          <Link to='/category/memorias' className='mx-3 hover:text-red-500'>Memorias</Link>
          <button className='mr-3 hover:text-red-500' onClick={()=>setDarkTheme(!darkTheme)}>TEMA</button>
          <CartWidget/>    
        </div>
    </nav>
  )
}