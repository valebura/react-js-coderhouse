import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import { Button } from './components/Button'
import { ItemCount } from './components/ItemCount/ItemCount'
import 'bootstrap/dist/css/bootstrap.min.css';
import PostsContainer from './components/PostsContainer'
import ItemDetailContainer from './components/ItemDetailContainer'

export function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer greeting="hola" />}/>
          <Route path='/categoria/:categoria' element={ <ItemListContainer greeting="hola" />}/>
          <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
          <Route path='*' element={<div className='container text-center'><h1><b>404</b><br/>Page Not Found</h1></div>} /> 
        </Routes>
      </BrowserRouter>      
    </>
  )
}
