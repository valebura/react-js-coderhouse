import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../asyncmock'
import ItemDetail from './ItemDetail'

export const ItemDetailContainer = () => {
  
  const [prod, setProd] = useState({})
  const [cargando, setCargando] = useState(true)
  const { id } = useParams()

  useEffect(()=>{ 
    setCargando(true)

    getProductById(id)
    .then(res => {
      setProd(res)
      setCargando(false)
  })
  }, [id])

  console.log(id)

  if (cargando) {
    return (
      <h1>Cargando....</h1>
    )
  }

  return (
    <>
      {prod &&
        <ItemDetail prod={prod} />
      }
    </>
  )
}