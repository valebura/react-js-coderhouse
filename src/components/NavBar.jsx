import React from 'react'
import { CartWidget } from './CartWidget'

export const NavBar = () => {
  return (
    <nav>
        <a href="#" title='HardwareZone'>
            <h2>HardwareZone</h2>
        </a>
        <div className='nav-categories'>
            <a href="#" className='categories' title='Procesadores'>Procesadores</a>
            <a href="#" className='categories' title='Placas de Video'>Placas de Video</a>
            <a href="#" className='categories' title='Memorias'>Memorias</a>
            <a href="#" title='Carrito'>
                <CartWidget/>
            </a>
        </div>
    </nav>
  )
}