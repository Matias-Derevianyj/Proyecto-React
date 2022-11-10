import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getProducts } from '../services/products';
import ItemList from './ItemList'

const ItemListContainer = () => {
  const [catalogo, setCatalogo] = useState([])
  const {idCategoria} = useParams()
  console.log(catalogo)
  useEffect(() => {
    getProducts(idCategoria).then((data) =>{
      setCatalogo(data)
    })
  }, [idCategoria])

  return (
    <div>
      <ItemList catalogo={catalogo} />
    </div>
  )
}

export default ItemListContainer
