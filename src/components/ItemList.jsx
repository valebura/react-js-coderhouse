import React from 'react'
import { Item } from './Item'

export const ItemList = ( {items} ) => {

  return (
    <>
       {items?.map( (e) => {
        return (
          <div className='rid grid-cols-4'>
            <Item key={e.id} product={e} />
          </div>
        )
       } )} 
    </>
  )
}