import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { ItemCount } from './ItemCount/ItemCount'

const ItemDetail = ({prod}) => {

    const {cart, addToCart} = useContext(CartContext)
    console.log(cart)

    const mostrarSiguiente = () => {
        setId(id + 1)
    }
    
    const mostrarAnterior = () => {
        setId(id - 1)
    }

    const handleAddToCart = (cant) =>{
        const prodConCantidad = {...prod, cantidad: cant}
        addToCart(prodConCantidad)
    }

    return (
        <div className='product-card'>      
            <h3>{prod.nombre}</h3>
            <h5><b>${prod.precio.toLocaleString('es-AR')}</b></h5>
            <img className='product-image' src={prod.image} alt="" />
            <button className='button-red' onClick={mostrarSiguiente}>Siguiente</button>
            <button className='button-red' onClick={mostrarAnterior}>Anterior</button>
            <ItemCount handleAddToCart={handleAddToCart}/>
        </div>
    )
}

export default ItemDetail