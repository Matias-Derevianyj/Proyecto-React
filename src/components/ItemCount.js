import { useState } from 'react'
import React from 'react'

const ItemCount = () => {

    const [contador, setContador] = useState(0)

    let stock = 10

    const sumar = () => {
      if(contador < stock){
        setContador(contador + 1)
        console.log(contador)
      } 

    }
    const restar = () => {
        if(contador > 0)
        setContador(contador -1)
        console.log(contador)

    }

  return (
    <div>
       <div className='btnCaja'>
            <button className='btn' onClick={restar}>-</button>
                <span className='countNumber'>{contador}</span>
            <button className='btn' onClick={sumar}>+</button>
            <button className='btnAgregar'>Agregar al carrito</button>
       </div>
      
    </div>
  )
}

export default ItemCount
