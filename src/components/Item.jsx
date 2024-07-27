import React from 'react'
import { ItemCount } from './ItemCount/ItemCount'

export const Item = ({producto}) => {
  return (
    <div>
        <h3>{producto.nombre}</h3>
        <p>{producto.precio}</p>
        <p>{producto.categoria}</p>
        <ItemCount />
    </div>
  )
}