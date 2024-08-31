import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from './Button'
import { getProducts } from '../asyncmock'
import { ItemList } from './ItemList'
import { db } from '../services/firebaseConfig'
import { getDocs, collection, query, where } from 'firebase/firestore'

export const ItemListContainer = ({greeting}) => {
  const [items, setItems] = useState([])
  const [cargando, setCargando] = useState(true)
  const { category } = useParams()
 
  useEffect(() => {
    // setCargando(true)
    if (category) {
      const productsXCat = query(collection(db, "products"), where("category", "==", category))
      getDocs(productsXCat).then(snapshot => {
        const prods = snapshot.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setItems(prods)
      }).finally(setCargando(false))
    } else {
      getDocs(collection(db, "products")).then(snapshot => {
        const prods = snapshot.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setItems(prods)
      }).finally(setCargando(false))
    }
  }, [category])

  if(cargando){
    return (
      <div className='container text-center'>
        <h3 className='mt-5'>cargando...</h3>
      </div>
    )
  }
  
  return (
    <div className='container m-auto grid grid-cols-3 gap-5'>
      <ItemList items={items}/>
    </div>
  )
}