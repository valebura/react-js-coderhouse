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
    <div className='flex flex-col rounded p-4 border-solid border-2 border-red-700 items-center justify-between text-center'>
        <h4 className='text-2xl font-bold text-gray-900 mb-2'>{product.name}</h4>
        <h5 className='text-xl font-bold text-sky-900 mb-2'><b>${product.price.toLocaleString('es-AR')}</b></h5>
        <p className='font-bold text-red-600 mb-3'>{capitalizeFirstLetter(product.category)}</p>
        <img className='w-auto max-h-52' src={product.image} alt="" />
        <Link to={`/detalle/${product.id}`}>
          <Button color="gray" funcion={mostrarDetalles}> 
            Ver Detalles
          </Button>
        </Link>
    </div>
  )
}