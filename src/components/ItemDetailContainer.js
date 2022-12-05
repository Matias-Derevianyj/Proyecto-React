import { useState,useEffect } from 'react'
import {getProduct} from '../services/products'
import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const {idProduct} = useParams()
  const [producto, setProducto] = useState([])

  useEffect(() =>{
    getProduct(idProduct).then(data => {
      console.log(data)
      setProducto(data)
    })
  })
  return (
    <div className='cajaCardProduct'>
      <ItemDetail product={producto}/>
    </div>
  )
}

export default ItemDetailContainer