import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ItemCount } from './ItemCount/ItemCount'
import { Button } from './Button'

export const Item = ({product}) => {
  const [isVisible, setIsVisible] = useState(false)

  const mostrarDetalles = () =>{
    setIsVisible(true)
  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className='flex flex-col rounded p-4 border-solid border-2 border-red-700 items-center justify-between'>
        <h4>{product.name}</h4>
        <h5><b>${product.price.toLocaleString('es-AR')}</b></h5>
        <p className='product-category'>{capitalizeFirstLetter(product.category)}</p>
        <img className='product-image w-auto max-h-52' src={product.image} alt="" />
        <Link to={`/detalle/${product.id}`}>
          <Button color="red" funcion={mostrarDetalles}> 
            Ver Detalles
          </Button>
        </Link>
    </div>
  )
}