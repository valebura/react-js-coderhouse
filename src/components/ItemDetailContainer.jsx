import React, { useEffect, useState } from 'react'

const ItemDetailContainer = ({id}) => {
    const [prod, setProd] =useState({})


    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>setProd(json))
    }, [])

  return (
    <div>{prod.description}
        <img src={prod.image} alt="imagen" />
    </div>
  )
}

export default ItemDetailContainer