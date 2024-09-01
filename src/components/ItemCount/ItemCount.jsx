import React, { useEffect, useState } from 'react'
import { Button } from '../Button'
import './ItemCount.css'
import { ItemList } from '../ItemList'

export const ItemCount = ({handleAddToCart}) => {
    const [count, setCount] = useState(1)

    const restar = () =>{
        if (count > 1) {            
            setCount(count - 1)
        }
    }
    
    const sumar  = ()=> {
        setCount(count + 1)
    }
    
    return (
        <div className='flex flex-row justify-between'>
            <Button color='red' funcion={restar}>-</Button> 
            <p className='text-2xl font-bold text-gray-900 mt-2 pt-2 mx-2'>{count}</p>
            <Button color="green" funcion={sumar}>+</Button>
            <button className='rounded-full bg-gray-400 hover:bg-gray-600 mt-3 ml-10' onClick={()=>handleAddToCart(count)}> Agregar Al Carrito </button>
        </div>
    )
}