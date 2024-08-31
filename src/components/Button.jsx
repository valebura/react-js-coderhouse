import React from 'react'

export const Button = ({color, funcion, children}) => {
    return (
        <button className='button-red' onClick={funcion}> {children}</button>
    )
}