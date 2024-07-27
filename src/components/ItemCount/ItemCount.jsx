import React, { useEffect, useState } from 'react'
import { Button } from '../Button'
import './ItemCount.css'

export const ItemCount = () => {
    const [contador, setCount] = useState(1)

    const restar = () => {
        console.log("se esta ejecutando restar")
        setCount(contador - 1)
    }

    const sumar = () => {
        console.log("se esta ejecutando sumar")
        setCount(contador + 1)
    }

    return (
        <div>
            <Button color="red" texto="-" funcion={restar} />
            <p>{contador}</p>
            <Button color="green" texto="+" funcion={sumar} />
        </div>
    )
}