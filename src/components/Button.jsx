import React from 'react'

export const Button = ({color, funcion, children}) => {
    console.log(color)
    return (
        <button className='button-red' onClick={funcion}> {children}</button>
    )
}