import React from 'react'
import ItemCount from '../components/ItemCount'
const ItemDetail = ({product}) => {
  
  return (
    <div>
      <div className='cardProduct'>
        <div className='cardImg'>
          <img src={product.img}/>
        </div>
        <div className='infoCard'>
          <h1>$ {product.precio}</h1>        
          <p>Descripcion: {product.nombre}</p>        
        <ItemCount/>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail