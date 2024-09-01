import React from 'react'
import { useLocation } from 'react-router-dom'

const Success = () => {
    const location = useLocation()
    const { orderId } = location.state || {} 

    return (
        <div className='container text-center mt-5'>
            <h2 className='text-4xl font-bold mb-3'>¡Gracias por tu compra!</h2>
            {orderId ? (
                <p className='text-2xl'>Tu número de orden es: <strong>{orderId}</strong></p>
            ) : (
                <p className='text-2xl'>Hubo un problema al obtener tu número de orden.</p>
            )}
        </div>
    )
}

export default Success