import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../asyncmock'

const ItemDetailContainer = () => {
  const [prod, setProd] =useState({})
  const [cargando, setCargando] = useState(true)
  // const [id, setId] = useState(1)
  const {id} = useParams()

  useEffect(()=>{ 
    setCargando(true)
    getProductById(id)
    .then(res => {
      setProd(res)
      setCargando(false)
  })}, [id])

  const mostrarSiguiente = () => {  
    // setId(id +1)
  }
  const mostrarAnterior = () => {  
    // setId(id -1)
  }

  if(cargando){
    return(
      <h1>cargando...</h1>
    )
  }

  return (
    <div className='product-card'>      
      <h3>{prod.nombre}</h3>
      <h5><b>${prod.precio.toLocaleString('es-AR')}</b></h5>
      <img className='product-image' src={prod.image} alt="" />
      <button className='button-red' onClick={mostrarSiguiente}>Siguiente</button>
      <button className='button-red' onClick={mostrarAnterior}>Anterior</button>
    </div>
  )
}

export default ItemDetailContainer