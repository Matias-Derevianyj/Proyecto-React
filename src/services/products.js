import productos from '../assets/json/productos.json'
export const getProducts = (idCategoria) => {
  const task = new Promise((resolve, reject) =>{
      setTimeout(() => {
          resolve(idCategoria?productos.filter(product => product.categoria === Number(idCategoria)):productos)
      }, 2000);
  })
  return task
}

export const getProduct = (idProduct) => {
  const task = new Promise((resolve, reject) =>{
      resolve(productos.find(product => product.id === Number(idProduct)))
  })
  return task
}
