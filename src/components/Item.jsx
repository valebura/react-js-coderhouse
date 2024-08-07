import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ItemCount } from './ItemCount/ItemCount'
import { Button } from './Button'
import ItemDetailContainer from './ItemDetailContainer'

export const Item = ({producto}) => {
  const [isVisible, setIsVisible] = useState(false)

  const mostrarDetalles = () =>{
    setIsVisible(true)
  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className='product-card'>
        <h4>{producto.nombre}</h4>
        <h5><b>${producto.precio.toLocaleString('es-AR')}</b></h5>
        <p className='product-category'>{capitalizeFirstLetter(producto.categoria)}</p>
        <img className='product-image' src={producto.image} alt="" />
        <Link to={`/detalle/${producto.id}`}>
          <Button color="red" funcion={mostrarDetalles}> 
            Ver Detalles
          </Button>
        </Link>         
        {
          isVisible ? <ItemDetailContainer id={producto.id} /> : <p className='mt-3'>Disponible</p>
        }
    </div>
  )
}