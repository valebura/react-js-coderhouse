import React from 'react'

export const Button = ({color, funcion, children}) => {
    return (
        <button className={`bg-${color}-400 mt-3`} onClick={funcion}> {children}</button>
    )
}