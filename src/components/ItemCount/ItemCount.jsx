import React, { useEffect, useState } from 'react'
import { Button } from '../Button'
import './ItemCount.css'
import { ItemList } from '../ItemList'

export const ItemCount = () => {
    const [count, setCount] = useState(1)

    const restar = () =>{
        console.log("se esta ejecutando restar")
        setCount(count - 1)
    }
    
    const sumar  = ()=> {
        console.log("se esta ejecutando sumar")
        setCount(count + 1)
    }
    
    return (
        <div className='container'>
            <Button variant='primary' onClick={restar} >  -  </Button> 
            <p>{count}</p>
            <Button color="green" funcion={sumar} >
              <ItemList/>
              +
            </Button>
        </div>
    )
}