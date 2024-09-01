import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { ItemCount } from './ItemCount/ItemCount'

const ItemDetail = ({prod}) => {
    
    const {cart, addToCart} = useContext(CartContext)
    
    const mostrarSiguiente = () => {
        setId(id + 1)
    }
    
    const mostrarAnterior = () => {
        setId(id - 1)
    }
    
    const handleAddToCart = (cant) =>{
        const prodConCantidad = {...prod, quantity: cant}
        addToCart(prodConCantidad)
    }
    
    return (
        <div>
            <div className='flex flex-row justify-between'>
                <div>
                    <h3 className='text-3xl font-extrabold text-gray-900 mb-2'>{prod.name}</h3>
                    <h3 className='text-2xl font-extrabold text-sky-900 mb-2'><b>${prod.price}</b></h3>
                </div>
                <div>                    
                    <ItemCount handleAddToCart={handleAddToCart}/>
                </div>
            </div>
            <div>
                <img className='w-auto' src={prod.image} alt="" />
            </div>
            {/* <button className='button-red' onClick={mostrarSiguiente}>Siguiente</button>
            <button className='button-red' onClick={mostrarAnterior}>Anterior</button> */}
        </div>
    )
}

export default ItemDetail