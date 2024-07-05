import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import { Button } from './components/Button'

export function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <div style={{textAlign: 'center'}}>
          <ItemListContainer greeting="Bienvenid@ a mi Tienda Online" />
        </div>
        <div style={{marginTop: '20px', textAlign: 'center'}}>
          <Button texto="COMPRAR" color="red"/>
        </div>
      </div>      
    </>
  )
}
