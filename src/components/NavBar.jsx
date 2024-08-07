import React from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from './CartWidget'

export const NavBar = () => {
  return (
    <nav>
        <Link to="/">
          <h2>HardwareZone</h2>
        </Link>
        <div className='nav-categories'>
          <Link to='/categoria/procesadores'>Procesadores</Link>
          <Link to='/categoria/placas'>Placas de Video</Link>
          <Link to='/categoria/memorias'>Memorias</Link>
          <a href="#" title='Carrito'><CartWidget/></a>          
        </div>
    </nav>
  )
  // return (
  //   <nav>
  //       <a href="#" title='HardwareZone'>
  //           <h2>HardwareZone</h2>
  //       </a>
  //       <div className='nav-categories'>
  //           <a href="#" className='categories' title='Procesadores'>Procesadores</a>
  //           <a href="#" className='categories' title='Placas de Video'>Placas de Video</a>
  //           <a href="#" className='categories' title='Memorias'>Memorias</a>
  //           <a href="#" title='Carrito'>
  //               <CartWidget/>
  //           </a>
  //       </div>
  //   </nav>
  // )
}