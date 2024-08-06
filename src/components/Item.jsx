import React from 'react'
import { ItemCount } from './ItemCount/ItemCount'
import { Button } from './Button'
import ItemDetailContainer from './ItemDetailContainer'

export const Item = ({producto}) => {
  const [isVisible, setIsVisible] = useState(false)

  const mostrarDetalles = () =>{
    setIsVisible(true)
  }
  return (
    <div className='container'>
        <h3>{producto.title}</h3>
        <img src={producto.image} alt="foto del producto" />
        <p>{producto.price}</p>
        <p>{producto.category}</p>
        <Button color="blue" funcion={mostrarDetalles}>Ver Detalles </Button>
        {
          isVisible ? <ItemDetailContainer id={producto.id} /> : <p>dale clickea el boton</p>
        }
    </div>
  )
}