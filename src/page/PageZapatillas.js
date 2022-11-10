import React from 'react'
import {Outlet} from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';

const PageZapatillas = () => {
  return (
    <div>
      <ItemListContainer/>
      <Outlet/>
    </div>
  )
}

export default PageZapatillas
