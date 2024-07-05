import React from 'react'

export const Button = ({texto, color}) => {
    const showAlert = () => {
        alert('Compra realizada!');
    };

    return (
        <button className={`button-${color}`} onClick={showAlert}>{texto}</button>
    )
}