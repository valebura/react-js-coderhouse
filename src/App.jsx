import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import { Button } from './components/Button'
import { ItemCount } from './components/ItemCount/ItemCount'
import 'bootstrap/dist/css/bootstrap.min.css';
import PostsContainer from './components/PostsContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer'
import Cart from './components/Cart'
import { CartContextProvider } from './context/CartContext'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

export function App() {

  const {darkTheme} = useContext(ThemeContext)

  return (
    <>
      <CartContextProvider>
      <div className={darkTheme ? "dark" : "light" }>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={ <ItemListContainer greeting="hola" />}/>
            <Route path='/category/:category' element={ <ItemListContainer greeting="hola" />}/>
            <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='*' element={<div className='container text-center'><h1><b>404</b><br/>Page Not Found</h1></div>} /> 
          </Routes>
        </BrowserRouter> 
      </div>
    </CartContextProvider>     
    </>
  )
}
