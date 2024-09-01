import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../services/firebaseConfig'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [order, setOrder] = useState({})
    const {cart, clearCart} = useContext(CartContext)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = {
            name,
            email,
            address
        }
        const data = {user, cart}
        const orderRef = collection(db, "orders")

        try {
            const orderId = await addDoc(orderRef, data)
            clearCart()
            navigate('/success', { state: { orderId: orderId.id } })  // Redirige y pasa la orden como estado
        } catch (error) {
            console.error("Error al realizar la orden: ", error)
        }
    }

    return (
        <div className='container'>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className='grid gap-5 grid-cols-3 mb-5'>
                    <div className='flex flex-column'>
                        <span className='pl-4 mb-2 font-bold'>Nombre</span>
                        <input type="text" placeholder='Ingrese su nombre' required className='border border-black mx-3 text-black px-2 py-1' onChange={(e) => setName(e.target.value) }/>  
                    </div>
                    <div className='flex flex-column'>
                        <span className='pl-4 mb-2 font-bold'>Email</span>
                        <input type="email" placeholder='Ingrese su email' required className='border border-black mx-3 text-black px-2 py-1' onChange={(e) => setEmail(e.target.value)}/>    
                    </div>
                    <div className='flex flex-column'>
                        <span className='pl-4 mb-2 font-bold'>Domicilio</span>
                        <input type="text" placeholder='Ingrese su domicilio' required className='border border-black mx-3 text-black px-2 py-1' onChange={(e) => setAddress(e.target.value)}/>    
                    </div>
                </div>                
                <div className='text-center'>
                    <button className='rounded-full bg-sky-400 hover:bg-sky-600 w-80' type='submit'>Finalizar compra</button>
                </div>
            </form>    
        </div>
    )
}

export default Checkout