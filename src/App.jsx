import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'
import { Button } from './components/Button'
import { ItemCount } from './components/ItemCount/ItemCount'

export function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="hola"/>
      <ItemCount />    
    </>
  )
}
