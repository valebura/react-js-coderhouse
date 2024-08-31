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
          <h2>HardwareZone</h2>
        </Link>
        <div className='nav-categories'>
          <Link to='/category/procesadores'>Procesadores</Link>
          <Link to='/category/placas'>Placas de Video</Link>
          <Link to='/category/memorias'>Memorias</Link>
          <h3>{mensajito}</h3>
          <button onClick={()=>setDarkTheme(!darkTheme)}>cambiar theme</button>
          <CartWidget/>    
        </div>
    </nav>
  )
}
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