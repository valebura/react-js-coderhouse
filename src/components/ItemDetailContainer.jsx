import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../asyncmock'
import ItemDetail from './ItemDetail'
import { db } from '../services/firebaseConfig'
import { getDoc, doc} from 'firebase/firestore'

export const ItemDetailContainer = () => {
  
  const [prod, setProd] = useState({})
  const [cargando, setCargando] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    setCargando(true)
    const productRef = doc(db, "products", id)
    getDoc(productRef).then(snapshot => {
      setProd(snapshot.data())      
    }).finally(setCargando(false))
    
  }, [id])

  if (cargando) {
    return (
      <h1>Cargando....</h1>
    )
  }

  return (
    <>
      <div className='container'>
        {prod &&
          <ItemDetail prod={prod} />
        }
      </div>
    </>
  )
}