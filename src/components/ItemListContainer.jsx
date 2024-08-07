import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from './Button'
import { getProducts } from '../asyncmock'
import { ItemList } from './ItemList'

export const ItemListContainer = ({greeting}) => {
  const [items , setItems] = useState([])
  const [cargando , setCargando ] = useState(true)
  const { categoria } = useParams()
 
  useEffect(() => {
    setCargando(true)
    if(categoria) {
      getProducts().then(prods => setItems(prods.filter(e => e.categoria === categoria)))
      .catch(err => err)
      .finally(() => setCargando(false))
    }else{
      getProducts().then(prods => setItems(prods))
      .catch(err => err)
      .finally(() => setCargando(false))
    }

  }, [categoria])

  if(cargando){
    return (
      <div className='container text-center'>
        <h3 className='mt-5'>cargando...</h3>
      </div>
    )
  }
  
  return (
    <div className='catalog container'>
      <ItemList items={items}/>
    </div>
  )
}